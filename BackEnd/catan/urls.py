from django.urls import path, include
from rest_framework import routers
from .views import GameResultViewSet, PersonalResultViewSet, PlayerViewSet
from django.conf import settings
from django.views.generic import TemplateView
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'player', PlayerViewSet)
router.register(r'gameResult', GameResultViewSet)
router.register(r'personalResult', PersonalResultViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', TemplateView.as_view(template_name="browser/index.html")),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)