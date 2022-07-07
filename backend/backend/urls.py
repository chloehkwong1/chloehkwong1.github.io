from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from moodtracker import views

router = routers.DefaultRouter()
router.register(r'moodtracker', views.MoodEntryView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]