# Generated by Django 5.0.6 on 2024-07-07 04:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('halls', '0002_seat'),
        ('tickets', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticket',
            name='seat_number',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='halls.seat'),
        ),
    ]