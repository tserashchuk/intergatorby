"""
URL configuration for intergator project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from bitrixsite import views


from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HomeView.as_view(), name='home'),
    path('company/', views.Company.as_view(), name='company'),
    path('about/', views.About.as_view(), name='about'),
    path('reviews/', views.ReviewsView.as_view(), name='reviews'),
    path('cases/', views.CasesView.as_view(), name='cases'),
    path('casecategory/', views.CaseCategoryView.as_view(), name='casecategory'),
    path('case/<str:case_slug>', views.CaseView.as_view(), name='case'),
    path('blog/', views.Blog.as_view(), name='blog'),
    path('articlecategory/', views.ArticleCategoryView.as_view(), name='articlecategory'),
    path('article/<str:article_slug>', views.ArticleView.as_view(), name='article'),
    path('webinars/', views.WebinarsView.as_view(), name='webinars'),
    path('webinars/<str:webinar_slug>', views.WebinarView.as_view(), name='webinar'),
    path('bitrix/', views.Bitrix.as_view(), name='bitrix'),
    path('services/', views.Services.as_view(), name='services'),
    path('vnedrenie/', views.Vnedrenie.as_view(), name='vnedrenie'),
    path('dorabotka/', views.Dorabotka.as_view(), name='dorabotka'),
    path('podderzka/', views.Podderzka.as_view(), name='podderzka'),
    path('audit/', views.Audit.as_view(), name='audit'),
    path('licence/', views.Licence.as_view(), name='licence'),
    path('oblako/', views.Oblako.as_view(), name='oblako'),
    path('korobka/', views.Korobka.as_view(), name='korobka'),
    path('prodlenie/', views.Prodlenie.as_view(), name='prodlenie'),
    path('market/', views.Market.as_view(), name='market'),
    path('contact/', views.Contact.as_view(), name='contact'),
    path('payment/', views.Payment.as_view(), name='payment'),
    path('ckeditor/', include('ckeditor_uploader.urls')),

    
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) 

