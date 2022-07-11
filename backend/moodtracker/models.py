from django.db import models

# Create your models here
class MoodEntry(models.Model):

    MOOD_CHOICES = [
        ('CALM', 'Calm'),
        ('EXCITED', 'Excited'),
        ('ANGRY', 'Angry'),
        ('SAD', 'Sad'),
        ('FRUSTRATED', 'Frustrated'),
        ('SCARED', 'Scared'),
        ('RESTED', 'Rested'),
        ('HAPPY', 'Happy'),
        ('TIRED', 'Tired'),
    ]

    HELP_TEXT = 'How are you feeling today?'

    time = models.DateTimeField(auto_now_add=True)
    mood = models.CharField(max_length=10, choices=MOOD_CHOICES, help_text=HELP_TEXT)
    mood_influences = models.TextField(blank=True)

    def _str_(self):
        return 'My mood was {self.mood} at {self.time}'


