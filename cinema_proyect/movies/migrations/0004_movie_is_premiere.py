# Generated by Django 5.0.6 on 2024-07-12 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0003_rename_duration_movie_duration_mins'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='is_premiere',
            field=models.BooleanField(default=False),
        ),
    ]