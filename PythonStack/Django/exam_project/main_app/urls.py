from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register_user),
    path('login', views.login_user),
    path('dashboard', views.dashboard),
    path('logout', views.logout),
    path('create', views.create_page),
    path('jobs/create', views.new_job), 
    path('cancel', views.cancel), 
]