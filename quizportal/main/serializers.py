from rest_framework import serializers
from . import models

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id','full_name', 'email', 'password', 'qualification', 'mobile_no', 'subject']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ['id','full_name', 'email', 'password', 'qualification', 'mobile_no', 'classname']