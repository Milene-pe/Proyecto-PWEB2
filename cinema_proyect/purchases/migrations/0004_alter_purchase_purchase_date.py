# Generated by Django 5.0.6 on 2024-07-12 05:38

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('purchases', '0003_remove_purchase_tickets'),
    ]

    operations = [
        migrations.AlterField(
            model_name='purchase',
            name='purchase_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
