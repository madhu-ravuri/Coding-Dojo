from django.shortcuts import render, redirect
import random

def index(request):
    if "number" not in request.session:
        request.session["number"] = random.randint(0,100)
    
    if "note" not in request.session:
        request.session["note"] = ""
    
    if "color" not in request.session:
        request.session["color"] = "blue"
    
    return render(request, "index.html")

def compare(request):
    if request.session["number"] < int(request.POST["guess"]):
        request.session["note"] = "Too high!"
        request.session["color"] = "red"
    
    elif request.session["number"] > int(request.POST["guess"]):
        request.session["note"] = "Too low!"
        request.session["color"] = "red"
    
    else:
        request.session["note"] = f"{request.session['number']} was the number!"
        request.session["color"] = "green"
    
    return redirect("/")