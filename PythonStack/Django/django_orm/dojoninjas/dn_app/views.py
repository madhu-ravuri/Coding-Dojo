from django.shortcuts import render, redirect, HttpResponse
from . models import Dojos, Ninjas

# Create your views here.
def index(request):
    context = {
        'DojoList' : Dojos.objects.all(),
        'NinjaList' : Ninjas.objects.all(),
    }
    return render(request, 'index.html', context)

def add_dojo(request):
    Dojos.objects.create(
        name = request.POST['name'],
        city = request.POST['city'],
        state = request.POST['state']
    )
    return redirect("/")

def add_ninja(request):
    Ninjas.objects.create(
        dojo_id = Dojos.objects.get(id=request.POST['dojo-id']),
        first_name = request.POST['fname'],
        last_name = request.POST['lname']
    )
    return render(request, 'index.html')