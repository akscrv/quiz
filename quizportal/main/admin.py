from django.contrib import admin
from . import models

admin.site.register(models.Teacher)
admin.site.register(models.Student)
admin.site.register(models.Question)
admin.site.register(models.Quiz)


# Register your models here.
