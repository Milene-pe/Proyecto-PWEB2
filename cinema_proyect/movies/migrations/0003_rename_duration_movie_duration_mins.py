# Generated by Django 5.0.6 on 2024-07-12 02:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_alter_movie_genre'),
    ]

    operations = [
        migrations.RenameField(
            model_name='movie',
            old_name='duration',
            new_name='duration_mins',
        ),
    ]