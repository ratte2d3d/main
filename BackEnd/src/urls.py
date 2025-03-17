from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from catan.urls import router as catan_router
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(catan_router.urls)),
]

# メディアファイルの取り扱い設定
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)