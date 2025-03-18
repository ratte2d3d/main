from django.urls import path, include
from rest_framework import routers
from .views import GameResultViewSet, PersonalResultViewSet, PlayerViewSet
from django.urls import re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'player', PlayerViewSet)
router.register(r'gameResult', GameResultViewSet)
router.register(r'personalResult', PersonalResultViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    re_path(r'^(?!api/).*$', TemplateView.as_view(template_name="index.html")), 
]

if not settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)