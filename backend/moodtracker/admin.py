from django.contrib import admin
from .models import MoodEntry

class MoodEntryAdmin(admin.ModelAdmin):
    list_display = ('time', 'mood','mood_influences')

# Register your models here.


admin.site.register(MoodEntry,  MoodEntryAdmin)