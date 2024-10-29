from django.shortcuts import render
from django.views import View
import requests

class HomeView(View):
    def get(self, request):
        return render(request, 'home.html')
    
class Company(View):
    def get(self, request):
        return render(request, 'company.html')

class About(View):
    def get(self, request):
        return render(request, 'about.html')

class Reviews(View):
    def get(self, request):
        return render(request, 'reviews.html')

class Cases(View):
    def get(self, request):
        return render(request, 'cases.html')

class Case(View):
    def get(self, request):
        return render(request, 'case.html')

class Blog(View):
    def get(self, request):
        return render(request, 'blog.html')

class ArticleCategory(View):
    def get(self, request):
        return render(request, 'articlecategory.html')

class Article(View):
    def get(self, request):
        return render(request, 'article.html')

class Webinars(View):
    def get(self, request):
        return render(request, 'webinars.html')

class Webinar(View):
    def get(self, request):
        return render(request, 'webinar.html')

class Bitrix(View):
    def get(self, request):
        return render(request, 'bitrix.html')

class Services(View):
    def get(self, request):
        return render(request, 'services.html')

class Vnedrenie(View):
    def get(self, request):
        return render(request, 'vnedrenie.html')

class Dorabotka(View):
    def get(self, request):
        return render(request, 'dorabotka.html')

class Podderzka(View):
    def get(self, request):
        return render(request, 'podderzka.html')

class Audit(View):
    def get(self, request):
        return render(request, 'audit.html')

class Licence(View):
    def get(self, request):
        return render(request, 'licence.html')

class Oblako(View):
    def get(self, request):
        return render(request, 'oblako.html')

class Korobka(View):
    def get(self, request):
        return render(request, 'korobka.html')

class Prodlenie(View):
    def get(self, request):
        return render(request, 'prodlenie.html')

class Market(View):
    def get(self, request):
        return render(request, 'market.html')

class Contact(View):
    def get(self, request):
        return render(request, 'contact.html')
