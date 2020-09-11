# Generated by Django 2.2.4 on 2020-08-21 16:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=65)),
                ('last_name', models.TextField(max_length=65)),
                ('email', models.CharField(max_length=65)),
                ('password', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job', models.CharField(max_length=65)),
                ('location', models.CharField(max_length=255)),
                ('desc', models.TextField()),
                ('filled_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='job_filled_by', to='main_app.User')),
                ('uploaded_by', models.ManyToManyField(related_name='uploaded_jobs', to='main_app.User')),
            ],
        ),
    ]