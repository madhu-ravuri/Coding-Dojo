from django.shortcuts import render, redirect
from django.contrib import messages
from . models import Shows 

# Create your views here.

def main(request):
    return redirect('/shows',)

def allShows(request):
    context = {
        'shows' : Shows.objects.all(),
    }
    return render(request, 'index.html', context)

def showForm(request):
    return render(request, 'newshow.html')

def addShow(request):
    errors = Shows.objects.basic_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        
        return redirect('/shows/new')
    
    else:
        newShow = Shows.objects.create(
            title = request.POST['title'],
            network = request.POST['network'],
            date = request.POST['date'],
            description = request.POST['desc']
        )
        return redirect(f"/shows/{newShow.id}")

def viewShow(request, showID):
    context = {
        'show' : Shows.objects.get(id=showID),
    }

    return render(request, 'viewshow.html', context)

def editView(request, showID):
    curr_show = Shows.objects.get(id=showID)
    curr_show.date = curr_show.date.strftime("%Y-%m-%d")
    context = {
        'show' : curr_show,
    }

    return render(request, 'editview.html', context)

def updateShow(request, showID):
    errors = Shows.objects.basic_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        
        return redirect(f"shows/{showID}/edit")

    else:
        updated_show = Shows.objects.get(id=showID)

        updated_show.title = request.POST['title']
        updated_show.network = request.POST['network']
        updated_show.date = request.POST['date']
        updated_show.description = request.POST['desc']

        updated_show.save()

        return redirect(f"/shows/{showID}")

def deleteShow(request, showID):
    delete_show = Shows.objects.get(id=showID)

    delete_show.delete()

    return redirect('/shows')
    
