from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('newBook', views.newBook),
    path('books/<int:bookID>', views.lookBook),
    path('addAuthor', views.add_author),
    path('authors', views.allAuthors),
    path('newAuthor', views.newAuthor),
    path('authors/<int:authorID>', views.lookAuthor),
    path('addBook', views.add_book),
]