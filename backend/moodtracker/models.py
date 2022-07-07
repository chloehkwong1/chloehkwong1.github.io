from django.db import models

# Create your models here.
class MoodEntry(models.Model):
    date = models.DateField()
    time = models.TimeField()
    mood = models.CharField(max_length=120)
    mood_influences = models.TextField()

    def _str_(self):
        return 'My mood at {self.time} on {self.date}'

# class MoodTypes(models.Model):
