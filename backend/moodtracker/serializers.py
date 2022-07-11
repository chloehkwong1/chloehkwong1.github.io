from rest_framework import serializers
from .models import MoodEntry

# This serializers specify the model to work with and the fields 
# to be converted to JSON so the frontend can receive data.

class MoodEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = MoodEntry
        fields = ('id', 'time', 'mood','mood_influences')
