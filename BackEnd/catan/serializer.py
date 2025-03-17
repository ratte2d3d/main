from rest_framework import serializers
from .models import GameResult, PersonalResult, Player
from django.conf import settings

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'

class GameResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameResult
        fields = '__all__'

class PersonalResultSerializer(serializers.ModelSerializer):
    player = serializers.PrimaryKeyRelatedField(queryset=Player.objects.all())
    game = serializers.PrimaryKeyRelatedField(queryset=GameResult.objects.all())

    class Meta:
        model = PersonalResult
        fields = '__all__'

    def to_representation(self, instance):
        """
        GET 時にplayerを展開して返す
        """
        representation = super().to_representation(instance)
        
        # プレイヤー情報を追加
        player_data = {
            "id": instance.player.id,
            "name": instance.player.name,
            "icon": settings.SITE_URL + instance.player.icon.url
        }
        representation['player'] = player_data
        
        return representation