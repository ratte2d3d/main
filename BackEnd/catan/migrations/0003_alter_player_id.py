# Generated by Django 5.1.5 on 2025-01-29 21:38

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catan', '0002_alter_player_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
