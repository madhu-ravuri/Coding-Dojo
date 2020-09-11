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


class JobManager(models.Manager):
    def basic_validator(self, postData):
        job_errors = {}

        if len(postData["job"]) < 3:
            job_errors["job"] = "A job must consist of at least 3 characters!"
        if len(postData["location"]) < 3:
            job_errors["location"] = "Please enter a valid location of at least 3 characters!"
        if len(postData["desc"]) < 3:
            job_errors["desc"] = "Please provide a description of at least 3 characters."
        return job_errors

class Job(models.Model):
    job = models.CharField(max_length=65)
    location = models.CharField(max_length=255)
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    uploaded_by = models.ForeignKey(
        User,
        related_name="my_jobs",
        on_delete=models.CASCADE
    )
    filled_by = models.ManyToManyField(
        User,
        related_name = "job_filled_by",
    )
    objects = JobManager()
