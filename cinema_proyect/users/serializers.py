from django.contrib.auth.models import User,Group
from rest_framework import serializers
from .models import UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'is_superuser']

class UserProfileSerializer(serializers.ModelSerializer):

    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ['user', 'dni', 'birthdate', 'phone', 'address', 'civil_status', 'is_logged']
