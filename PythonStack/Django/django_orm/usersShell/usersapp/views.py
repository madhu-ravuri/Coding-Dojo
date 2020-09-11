from django.shortcuts import render, redirect
from .models import Users

# Create your views here.
def index(request):
    context = {
        'all_users' : Users.objects.all(),
    }
    return render(request, "index.html", context)

def create_user(request):
    Users.objects.create(
    first_name = request.POST['firstname'],
    last_name = request.POST['lastname'],
    email_address = request.POST['email'],
    age = request.POST['age']
    )
    
    return redirect('/')
    
