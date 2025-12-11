from django.shortcuts import render
from django.views import View
import requests
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from bitrixsite.models import *

class HomeView(View):
    def get(self, request):
        return render(request, 'home.html')
    
class Company(View):
    def get(self, request):
        return render(request, 'company.html')

class About(View):
    def get(self, request):
        return render(request, 'about.html')

class ReviewsView(View):
    def get(self, request):
        reviews = Review.objects.all()
        return render(request, 'reviews.html',{'reviews':reviews})

class CasesView(View):
    def get(self, request):
        cases = Case.objects.all()
        casescategorys = CaseCategory.objects.all()
        return render(request, 'cases.html', {'casescategorys':casescategorys, 'cases':cases})
    
class CaseCategoryView(View):
    def get(self, request):
        return render(request, 'case.html')

class CaseView(View):
    def get(self, request, case_slug):
        case = Case.objects.get(case_slug=case_slug)
        return render(request, 'case.html', {'case':case})

class Blog(View):
    def get(self, request):
        articles = Article.objects.all()
        cats = ArticleCategory.objects.all()

        
        paginator = Paginator(articles, 5)  
        page_number = request.GET.get("page")
        page_obj = paginator.get_page(page_number)

        return render(request, 'blog.html', {'articles':articles,'cats':cats, 'page_obj':page_obj})

class ArticleCategoryView(View):
    def get(self, request):
        return render(request, 'articlecategory.html')

class ArticleView(View):
    def get(self, request, article_slug):
        article = Article.objects.get(article_slug=article_slug)
        return render(request, 'article.html', {'article':article})
    

class Payment(View):
    def get(self, request):
        return render(request, 'payment.html')

class WebinarsView(View):
    def get(self, request):
        cwebinars = CategoryWebinar.objects.all()
        actwebs = Webinar.objects.all().order_by('pub_date')
        webinars = Webinar.objects.all().order_by('-pub_date')
        return render(request, 'webinars.html',{'cwebinars':cwebinars,'webinars':webinars,'actwebs':actwebs})

class WebinarView(View):
    def get(self, request, webinar_slug):
        webinar = Webinar.objects.get(webinar_slug=webinar_slug)
        return render(request, 'webinar.html', {'webinar':webinar})

class Bitrix(View):
    def get(self, request):
        return render(request, 'bitrix.html')

class Services(View):
    def get(self, request):
        return render(request, 'services.html')

class Vnedreniepaket(View):
    def get(self, request):
        return render(request, 'vnedreniepaket.html')

class Vnedrenieproektnoe(View):
    def get(self, request):
        return render(request, 'Vnedrenieproektnoe.html')

class Dorabotka(View):
    def get(self, request):
        return render(request, 'dorabotka.html')

class Podderzka(View):
    def get(self, request):
        return render(request, 'podderzka.html')

class Audit(View):
    def get(self, request):
        return render(request, 'audit.html')

class Bi(View):
    def get(self, request):
        return render(request, 'bi.html')
        
class Obuchenie(View):
    def get(self, request):
        return render(request, 'obuchenie.html')

class Enterprise(View):
    def get(self, request):
        return render(request, 'enterprise.html')        

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
