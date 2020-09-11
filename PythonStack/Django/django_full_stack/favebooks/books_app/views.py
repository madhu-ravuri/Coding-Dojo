from django.shortcuts import render, redirect
from django.contrib import messages
from . models import User, Books
import bcrypt

# Create your views here.
def index(request):
    return render(request, 'index.html')

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
    return redirect("/books")

def dashboard(request):
    # protect from non-logged in users
    if "user_id" not in request.session:
        messages.error(request, "You must log in first!")
        return redirect("/")

    context = {
        "current_user" : User.objects.get(id=request.session["user_id"]),
        "all_books" : Books.objects.all()
    }
    return render(request, 'dashboard.html', context)

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
    return redirect("/books")

def logout_user(request):
    request.session.clear()

    return redirect("/")

def addBook(request):
    book_errors = Books.objects.basic_validator(request.POST)

    if len(book_errors) > 0:
        for key, value in book_errors.items():
            messages.error(request, value)
        
        return redirect("/books")

    newBook = Books.objects.create(
        title=request.POST["title"], 
        desc=request.POST["desc"],
        uploaded_by = User.objects.get(id=request.session["user_id"])
    )

    return redirect(f"/fav_book/{newBook.id}")


def viewBook(request, bookID):
    thisbook = Books.objects.get(id=bookID)

    context = {
        'current_user' : User.objects.get(id=request.session["user_id"]),
        'book' : thisbook
    }
    return render(request, 'book.html', context)

def editBook(request, bookID):
    book_errors = Books.objects.basic_validator(request.POST)

    if len(book_errors) > 0:
        for key, value in book_errors.items():
            messages.error(request, value)
        
        return redirect(f"books/{bookID}/edit")

    else:
        updated_book = Books.objects.get(id=bookID)

        updated_book.title = request.POST['title']
        updated_book.desc = request.POST['desc']

        updated_book.save()

        return redirect(f"/books/{bookID}")
    
def fav_book(request, bookID):
    logged_user = User.objects.get(id=request.session['user_id'])
    book = Books.objects.get(id=bookID)

    book.liked_list.add(logged_user)
    book.save()

    return redirect(f"/books/{bookID}")

def un_fav_book(request, bookID):
    logged_user = User.objects.get(id=request.session['user_id'])
    book = Books.objects.get(id=bookID)

    book.liked_list.remove(logged_user)
    book.save()

    return redirect(f"/books/{bookID}")

def delete_book(request, bookID):
    book = Books.objects.get(id=bookID)
    book.delete()
    
    return redirect("/books")