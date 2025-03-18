from django.urls import path, include
from rest_framework import routers
from .views import GameResultViewSet, PersonalResultViewSet, PlayerViewSet

router = routers.DefaultRouter()
router.register(r'player', PlayerViewSet)
router.register(r'gameResult', GameResultViewSet)
router.register(r'personalResult', PersonalResultViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]