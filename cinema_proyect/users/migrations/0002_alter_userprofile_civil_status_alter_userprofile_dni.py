# Generated by Django 5.0.6 on 2024-07-11 21:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='civil_status',
            field=models.CharField(choices=[('Soltero(a)', 'Soltero(a)'), ('Casado(a)', 'Casado(a)'), ('Divorciado(a)', 'Divorciado(a)'), ('Viudo(a)', 'Viudo(a)')], max_length=20),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='dni',
            field=models.CharField(max_length=8, unique=True),
        ),
    ]
