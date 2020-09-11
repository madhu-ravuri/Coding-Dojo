from django.shortcuts import render, redirect
from django.contrib import messages
from . models import User
import bcrypt

# Create your views here.
def index(request):
    return render(request, 'login.html')

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
            first_name = request.POST['firstname'],
            last_name = request.POST['lastname'],
            email = request.POST['email'],
            password = hashed_pw
        )

    # adds id to the session so we can utilize the user info
    request.session["user_id"] = newUser.id
    return redirect("/success")

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
    return redirect("/success")

def dashboard(request):
    # protect from non-logged in users
    if "user_id" not in request.session:
        messages.error(request, "You must log in first!")
        return redirect("/")
    
    context = {
        "current_user" : User.objects.get(id=request.session["user_id"])
    }
    return render(request, 'success.html', context)

def logout(request):
    request.session.clear()

    return redirect("/")