from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MoodEntrySerializer
from .models import MoodEntry

# The viewsets base class provides the implementation for CRUD 
# operations by default. This code specifies the serializer_class and the queryset.

class MoodEntryView(viewsets.ModelViewSet):
    '''API endpoint that allows mood entry items to be viewed or edited.'''
    serializer_class = MoodEntrySerializer
    queryset = MoodEntry.objects.all()
