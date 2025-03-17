from django.db import models
import uuid

class Player(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=8)
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    birthday = models.DateField()
    icon = models.ImageField(upload_to='icons/', default='icons/default_icon.png')  # デフォルト画像を設定
    role = models.IntegerField(default=1)
    isGraduated = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.name

    
class GameResult(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=8)
    date = models.DateField()
    startTime = models.DateTimeField(null=True)
    endTime = models.DateTimeField(null=True)
    playTime = models.TimeField(null=True)
    turn = models.IntegerField(default=1)
    dice2 = models.IntegerField(default=0)
    dice3 = models.IntegerField(default=0)
    dice4 = models.IntegerField(default=0)
    dice5 = models.IntegerField(default=0)
    dice6 = models.IntegerField(default=0)
    dice7 = models.IntegerField(default=0)
    dice8 = models.IntegerField(default=0)
    dice9 = models.IntegerField(default=0)
    dice10 = models.IntegerField(default=0)
    dice11 = models.IntegerField(default=0)
    dice12 = models.IntegerField(default=0)
    recentDice1 = models.IntegerField(null=True)
    recentDice2 = models.IntegerField(null=True)
    recentDice3 = models.IntegerField(null=True)
    recentDice4 = models.IntegerField(null=True)
    recentDice5 = models.IntegerField(null=True)
    recentDice6 = models.IntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.startTime}-{self.endTime}"
    
class PersonalResult(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    player = models.ForeignKey(Player, on_delete=models.PROTECT)
    game = models.ForeignKey(GameResult, on_delete=models.PROTECT)
    win = models.BooleanField(default=False)
    order = models.IntegerField()
    color = models.CharField(max_length=8)
    dice2 = models.IntegerField(default=0)
    dice3 = models.IntegerField(default=0)
    dice4 = models.IntegerField(default=0)
    dice5 = models.IntegerField(default=0)
    dice6 = models.IntegerField(default=0)
    dice7 = models.IntegerField(default=0)
    dice8 = models.IntegerField(default=0)
    dice9 = models.IntegerField(default=0)
    dice10 = models.IntegerField(default=0)
    dice11 = models.IntegerField(default=0)
    dice12 = models.IntegerField(default=0)
    land = models.IntegerField(default=0)
    city = models.IntegerField(default=0)
    card = models.IntegerField(default=0)
    point = models.IntegerField(default=0)
    longestRoad = models.BooleanField(default=False)
    largestArmy = models.BooleanField(default=False)
    halfPoint = models.IntegerField(default=0)
    yellowFriend = models.BooleanField(default=False)
    greenFriend = models.BooleanField(default=False)
    readFriend =models.BooleanField(default=False)
    blueFriend = models.BooleanField(default=False)
    def __str__(self):
        return f"{self.game}-{self.player}"