from django.urls import path
from . import views

urlpatterns = [
    path('teachers/', views.TeacherList.as_view()),
    path('teachers/<int:pk>/', views.TeacherDetails.as_view()),
    path('teacher-login',views.teacher_login),
    path('students/', views.StudentList.as_view()),
    path('students/<int:pk>/', views.StudentDetails.as_view()),
    



]