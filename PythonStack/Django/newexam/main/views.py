from django.shortcuts import render, redirect
from django.contrib import messages
from . models import User, Job
import bcrypt

# Create your views here.
def index(request):
    return render (request, 'index.html')

def register_user(request):
    errors = User.objects.basic_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
                
        return redirect("/")
            
    else:
        hashed_pw = bcrypt.hashpw(
            request.POST["password"].encode(),
            bcrypt.gensalt()
        ).decode()

        newUser = User.objects.create(
            first_name = request.POST['first_name'],
            last_name = request.POST['last_name'],
            email = request.POST['email'],
            password = hashed_pw
        )

    # adds id to the session so we can utilize the user info
    request.session["user_id"] = newUser.id
    return redirect("/dashboard")

def login_user(request):
    potential_user = User.objects.filter(email=request.POST["email"])

    # check that user exists
    if len(potential_user) == 0:
        print("email not in database")
        messages.error(request, "Please check your email & password")
        
        return redirect("/")
    
    # check if password matches
    if not bcrypt.checkpw(
        request.POST["password"].encode(),
        potential_user[0].password.encode()
    ):
        messages.error(request, "Please check your email & password")

        return redirect("/")

    # log user in if everything is fine
    request.session["user_id"] = potential_user[0].id 
    return redirect('/dashboard')

def dashboard(request):
    if "user_id" not in request.session:
        messages.error(request, "You must log in first!")
        return redirect("/")
    
    context = {
        "current_user" : User.objects.get(id=request.session["user_id"]),
        "all_jobs" : Job.objects.all(),
    }
    return render(request, 'dashboard.html', context)

def logout(request):
    request.session.clear()
    return redirect("/")

def create_page(request):
    context = {
        "current_user" : User.objects.get(id=request.session["user_id"])
    }
    return render(request, 'newjob.html', context)

def new_job(request):
    job_errors = Job.objects.basic_validator(request.POST)

    if len(job_errors) > 0:
        for key, value in job_errors.items():
            messages.error(request, value)
        
        return redirect("/create")

    newJob = Job.objects.create(
        job=request.POST["job"], 
        location=request.POST["location"],
        desc=request.POST["desc"],
        uploaded_by = User.objects.get(id=request.session["user_id"])
    )
    return redirect("/dashboard")

def cancel(request):
    return redirect("/dashboard")

def edit_page(request, jobID):
    context = {
        "job" : Job.objects.get(id=jobID),
        "current_user" : User.objects.get(id=request.session["user_id"]),
    }
    
    return render(request, 'editjob.html', context)

def edit_job(request, jobID):
    job_errors = Job.objects.basic_validator(request.POST)

    if len(job_errors) > 0:
        for key, value in job_errors.items():
            messages.error(request, value)
        
        return redirect(f"/jobs/edit/{jobID}")

    else:
        updated_job = Job.objects.get(id=jobID)

        updated_job.job = request.POST['job']
        updated_job.location = request.POST['location']
        updated_job.desc = request.POST['desc']

        updated_job.save()

        return redirect("/dashboard")
    
def add_job(request, jobID):
    current_user = User.objects.get(id=request.session["user_id"])
    adding_job = Job.objects.get(id=jobID)

    adding_job.filled_by.add(current_user)
    adding_job.save()

    return redirect("/dashboard")

def remove_job(request, jobID):
    # current_user = User.objects.get(id=request.session["user_id"])
    # adding_job = Job.objects.get(id=jobID)

    # adding_job.filled_by.remove(current_user)
    # adding_job.save()

    this_job = Job.objects.get(id=jobID)
    this_job.delete()

    return redirect("/dashboard")

def view_job(request, jobID):
    context = {
        "current_user" : User.objects.get(id=request.session["user_id"]),
        "job" : Job.objects.get(id=jobID)
    }

    return render(request, 'viewjob.html', context)