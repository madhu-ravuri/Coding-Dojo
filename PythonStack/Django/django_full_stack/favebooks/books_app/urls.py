from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register_user),
    path('login', views.login_user),
    path('logout', views.logout_user),
    path('books', views.dashboard),
    path('addBook', views.addBook),
    path('books/<int:bookID>', views.viewBook),
    path('edit/<int:bookID>', views.editBook),
    path('fav_book/<int:bookID>', views.fav_book),
    path('un_fav_book/<int:bookID>', views.un_fav_book),
    path('delete/<int:bookID>', views.delete_book),
]