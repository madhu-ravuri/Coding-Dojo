from django.urls import path
from . import views

urlpatterns = [
    path('', views.main),
    path('shows', views.allShows),
    path('shows/new', views.showForm),
    path('shows/<int:showID>', views.viewShow),
    path('shows/create', views.addShow),
    path('shows/<int:showID>/edit', views.editView),
    path('shows/<int:showID>/update', views.updateShow),
    path('shows/<int:showID>/destroy', views.deleteShow),
]