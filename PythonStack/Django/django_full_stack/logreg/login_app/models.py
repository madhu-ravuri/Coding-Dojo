from django.db import models
import re

# Create your models here.
class UserManager(models.Manager):
    def basic_validator(self, postData):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        errors = {}
        if len(postData["firstname"]) < 2:
            errors["firstname"] = "First Name should be at least 2 characters"
        if len(postData['lastname']) < 2:
            errors["lastname"] = "Last Name should be at least 2 characters"
        if not EMAIL_REGEX.match(postData["email"]):
            errors["email"] = "Please enter a valid email address"
        if len(postData["password"]) < 8:
            errors["password"] = "Please enter a password at least 8 characters long"
        if postData["password"] != postData["confirmPW"]:
            errors["confirmPW"] = "Please ensure both passwords match"
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=65)
    last_name = models.TextField(max_length=65)
    email = models.CharField(max_length=65)
    password = models.CharField(max_length=30)
    objects = UserManager()
    
