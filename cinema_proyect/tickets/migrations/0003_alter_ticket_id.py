# Generated by Django 5.0.6 on 2024-07-07 04:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tickets', '0002_alter_ticket_seat_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ticket',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
