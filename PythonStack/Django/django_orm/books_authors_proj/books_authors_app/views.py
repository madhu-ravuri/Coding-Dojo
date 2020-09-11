from django.shortcuts import render, redirect, HttpResponse
from . models import Book, Author

# Create your views here.
def index(request):
    context = {
        'allBooks' : Book.objects.all()
    }
    return render(request, 'index.html', context)

def newBook(request):
    Book.objects.create(
        title = request.POST['title'],
        desc = request.POST['desc']
    )
    return redirect('/')

def lookBook(request, bookID):
    context = {
        'book' : Book.objects.get(id=bookID),
        'authors' : Author.objects.all()
    }

    return render(request, 'viewbook.html', context)

def add_author(request):
    book = Book.objects.get(id=request.POST["bookID"])
    newAuth = Author.objects.get(id=request.POST["author-id"])
    book.authors.add(newAuth)
    
    return redirect(f"/books/{request.POST['bookID']}")

def allAuthors(request):
    context = {
        'allAuthors' : Author.objects.all()
    }

    return render(request, 'authors.html', context)

def newAuthor(request):
    Author.objects.create(
        first_name = request.POST['fname'],
        last_name = request.POST['lname'],
        notes = request.POST['notes']
    )

    return redirect('/authors')

def lookAuthor(request, authorID):
    context = {
        'author' : Author.objects.get(id=authorID),
        'books' : Book.objects.all()
    }

    return render(request, 'viewAuthor.html', context)

def add_book(request):
    author = Author.objects.get(id=request.POST['authorID'])
    newBook = Book.objects.get(id=request.POST['bookID'])
    author.books.add(newBook)

    return redirect(f"/authors/{request.POST['authorID']}")