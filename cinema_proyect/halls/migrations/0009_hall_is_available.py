# Generated by Django 5.0.6 on 2024-07-12 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('halls', '0008_showtime_end_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='hall',
            name='is_available',
            field=models.BooleanField(default=True),
        ),
    ]
