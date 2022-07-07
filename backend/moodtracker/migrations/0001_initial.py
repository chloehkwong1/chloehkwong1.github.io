# Generated by Django 4.0.6 on 2022-07-07 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MoodEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('mood', models.CharField(max_length=120)),
                ('mood_influences', models.TextField()),
            ],
        ),
    ]