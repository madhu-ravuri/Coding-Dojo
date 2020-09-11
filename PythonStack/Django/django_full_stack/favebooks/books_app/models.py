from django.db import models
import re

# Create your models here.
class UserManager(models.Manager):
    def basic_validator(self, postData):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        errors = {}
        if len(postData["first_name"]) < 2:
            errors["first_name"] = "First Name should be at least 2 characters"
        if len(postData['last_name']) < 2:
            errors["last_name"] = "Last Name should be at least 2 characters"
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

class BookManager(models.Manager):
    def basic_validator(self, postData):
        book_errors = {}

        if len(postData["title"]) == 0:
            book_errors["title"] = "Please enter a valid title."
        if len(postData["desc"]) < 5:
            book_errors["desc"] = "Description must be longer than 5 characters."
        return book_errors

class Books(models.Model):
    title = models.CharField(max_length=255)
    desc = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    uploaded_by = models.ForeignKey(
        User, 
        related_name="books_uploaded",
        on_delete=models.CASCADE
    ) # gives us user who uploaded book

    liked_list = models.ManyToManyField(
        User,
        related_name = "liked_books"
    ) # gives us list of books the user liked

    objects = BookManager()