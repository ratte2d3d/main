"""
Django settings for src project.

Generated by 'django-admin startproject' using Django 5.1.5.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.1/ref/settings/
"""

from pathlib import Path
import os
import environ

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-0c_d8h&aj9vpzgr97vfyac3j^$h^=)@h_(=prgk0=v8659yf2o'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
# SITE_URL = 'http://127.0.0.1:8000'
SITE_URL = 'https://main-8r55.onrender.com'

ALLOWED_HOSTS = ['main-8r55.onrender.com', 'frontend-gn26.onrender.com', 'localhost', '127.0.0.1']

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'django_filters',
    'corsheaders',
    'catan',
    'storages',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

ROOT_URLCONF = 'src.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'src.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'neondb',  # データベース名
        'USER': 'neondb_owner',  # ユーザー名
        'PASSWORD': 'npg_7nAItQKT5aFP',  # パスワード
        'HOST': 'ep-delicate-darkness-a5wiogkb-pooler.us-east-2.aws.neon.tech',  # ホスト名（Neon のエンドポイント）
        'PORT': '5432',  # ポート番号
        'OPTIONS': {
            'sslmode': 'require',  # SSL接続を要求
        },
    }
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': BASE_DIR / 'db.sqlite3'
    # }
}


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True

# 環境変数を読み込むための設定
env = environ.Env()
# Render.comで設定した環境変数を読み込む
environ.Env.read_env()

# S3の設定を環境変数から取得
AWS_ACCESS_KEY_ID = env('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = env('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = env('AWS_STORAGE_BUCKET_NAME')
# AWS_S3_REGION_NAME = env('AWS_S3_REGION_NAME')
# S3にアップロードされるファイルにデフォルトのACLを設定しない
AWS_DEFAULT_ACL = 'public-read'
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',  # キャッシュの制御（オプション）
}
AWS_LOCATION = 'static'

AWS_QUERYSTRING_AUTH = False

AWS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
}

# メディアファイル（画像など）のURL設定
AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'
# メディアファイルの保存場所
# MEDIA_URL = '/media/'  # ユーザーがブラウザからアクセスする際のURLパス
MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/media/'
# MEDIA_ROOT = os.path.join(BASE_DIR, 'media')  # 実際のファイルが保存される場所

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/
# STATIC_URL = '/static/'
STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# mediaファイル保存先
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
# # staticファイルの参照先
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3StaticStorage'
