from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, "index.html")

def submit(request):
    name_result = request.POST['name']
    loc_result = request.POST['loc']
    lang_result = request.POST['lang']
    comments = request.POST['comments']
    context = {
        "name_result" : name_result,
        "loc_result" : loc_result,
        "lang_result" : lang_result,
        "comments" : comments,
    }
    return render(request, "results.html", context)
