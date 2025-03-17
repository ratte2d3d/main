from django.urls import path, include
from rest_framework import routers
from .views import GameResultViewSet, PersonalResultViewSet, PlayerViewSet
from django.conf import settings
from django.conf.urls.static import static
from . import views

router = routers.DefaultRouter()
router.register(r'player', PlayerViewSet)
router.register(r'gameResult', GameResultViewSet)
router.register(r'personalResult', PersonalResultViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.angular_app, name='angular_app'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)