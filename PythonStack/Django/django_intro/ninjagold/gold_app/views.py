from django.shortcuts import render, redirect
import random
from datetime import datetime

# Create your views here.
def index(request):
    if "gold" not in request.session:
        request.session["gold"] = 0
        request.session["activities"] = []

    return render(request, 'index.html')

def gold(request):
    print(request.POST)

    building = request.POST["building"]

    if building == "farm":
        gains = random.randint(10, 20)

    elif building == "cave":
        gains = random.randint(5, 10)

    elif building == "house":
        gains = random.randint(2, 5)

    elif building == "casino":
        gains = random.randint(-50, 50)

    request.session["activities"].append({
        "building" : building,
        "gold" : gains if gains >= 0 else -1 * gains,
        "timestamp" : str(datetime.now()),
        "note" : "earned" if gains >= 0 else "lost"
    })

    request.session["gold"] += gains

    return redirect("/")