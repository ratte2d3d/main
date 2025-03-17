from django.contrib import admin
from .models import Player
from .models import GameResult
from .models import PersonalResult

@admin.register(Player)
class Player(admin.ModelAdmin):
    pass

@admin.register(GameResult)
class GameResult(admin.ModelAdmin):
    ordering = ['-created_at']

@admin.register(PersonalResult)
class PersonalResult(admin.ModelAdmin):
    ordering = ['-game__created_at','order']