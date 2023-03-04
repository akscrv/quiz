from django.db import models

# Create your models here.

class Teacher(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=100)
    mobile_no=models.CharField(max_length=20)
    subject=models.TextField()

class Quiz(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField()

class Question(models.Model):
    category=models.ForeignKey(Quiz,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    question=models.TextField()
    option1=models.CharField(max_length=100)
    option2=models.CharField(max_length=100)
    option3=models.CharField(max_length=100)
    option4=models.CharField(max_length=100)

class Student(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=100)
    mobile_no=models.CharField(max_length=20)
    classname=models.TextField()