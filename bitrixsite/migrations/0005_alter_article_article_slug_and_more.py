# Generated by Django 5.1.1 on 2025-01-08 09:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bitrixsite', '0004_case_case_client_case_case_duration_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='article_slug',
            field=models.CharField(default='article2025-01-08 12:13:32.070240', max_length=200, verbose_name='URL'),
        ),
        migrations.AlterField(
            model_name='articlecategory',
            name='cat_slug',
            field=models.CharField(default='slug2025-01-08 12:13:32.070240', max_length=200, verbose_name='URL'),
        ),
        migrations.AlterField(
            model_name='case',
            name='case_client',
            field=models.CharField(blank=True, max_length=200, verbose_name='Клиент'),
        ),
        migrations.AlterField(
            model_name='case',
            name='case_duration',
            field=models.CharField(blank=True, max_length=200, verbose_name='Временные затраты'),
        ),
        migrations.AlterField(
            model_name='case',
            name='case_slug',
            field=models.CharField(default='article2025-01-08 12:13:32.071239', max_length=200, verbose_name='URL'),
        ),
        migrations.AlterField(
            model_name='casecategory',
            name='cat_slug',
            field=models.CharField(default='slug2025-01-08 12:13:32.070240', max_length=200, verbose_name='URL'),
        ),
        migrations.AlterField(
            model_name='categorywebinar',
            name='cat_slug',
            field=models.CharField(default='slug2025-01-08 12:13:32.071239', max_length=200, verbose_name='URL'),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='tweet_slug',
            field=models.CharField(default='article2025-01-08 12:13:32.069239', max_length=200, verbose_name='URL'),
        ),
        migrations.AlterField(
            model_name='webinar',
            name='webinar_slug',
            field=models.CharField(default='article2025-01-08 12:13:32.072240', max_length=200, verbose_name='URL'),
        ),
    ]
