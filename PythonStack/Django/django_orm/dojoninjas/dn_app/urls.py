from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('addDojo', views.add_dojo),
    path('addNinja', views.add_ninja),
]