import datetime
from django.urls import reverse
from django.db import models
from django.contrib.auth.models import User

TWEET_CHOICES = (
    ('Вебинар','Вебинар'),
    ('Новость', 'Новость'),
    ('Заметка', 'Заметка'),
    ('Внимание', 'Внимание'),
)



class Tweet(models.Model):
    tweet_name = models.CharField('Заголовок H1', max_length=200)
    tweet_slug = models.CharField('URL', max_length=200, default='article' + str(datetime.datetime.now()))
    tweet_short_desc = models.TextField('Короткое описание для Schema', blank=True)
    pub_date = models.DateTimeField(default=datetime.datetime.now)
    tweet_type = models.CharField('Тип заметки', max_length=10, choices=TWEET_CHOICES, blank=True)
    def __str__(self):
        return self.tweet_name

    def get_absolute_url(self):
        return reverse('tweet', args=[self.tweet_slug])
    

class Person(models.Model):
    user_link = models.OneToOneField(User, null=True, blank=True, on_delete=models.CASCADE)
    person_name = models.CharField('Имя', max_length=200)
    person_title = models.CharField('Заголовок для Open Graph (og:title)', max_length=200)
    person_metadesc = models.CharField('Описание для Open Graph (og:description)', max_length=300)
    person_short_desc = models.TextField('Короткое описание', blank=True)
    # case_short_desc = models.TextField('Короткое описание для Schema', blank=True) тут сделать поле редактора
    person_image = models.ImageField('Фото')
    pub_date = models.DateTimeField(default=datetime.datetime.now)

    def __str__(self):
        return self.person_name


class ArticleCategory(models.Model):
    cat_name = models.CharField('Название категории статьи', max_length=200)
    cat_title = models.CharField('Заголовок для Open Graph (og:title)', max_length=200, blank=True)
    cat_metadesc = models.CharField('Описание для Open Graph (og:description)', max_length=300, blank=True)
    cat_slug = models.CharField('URL', max_length=200, default='slug' + str(datetime.datetime.now()))
    cat_short_desc = models.TextField('Короткое описание', blank=True)
    cat_image = models.ImageField('Изображение категории', default='placeholder.jpg')
    pub_date = models.DateTimeField(default=datetime.datetime.now)
    

    def __str__(self):
        return self.cat_name

    def get_absolute_url(self):
        return reverse('artcat', args=[self.cat_slug])
    


class Article(models.Model):
    article_name = models.CharField('Заголовок H1', max_length=200)
    article_title = models.CharField('Заголовок для Open Graph (og:title)', max_length=200)
    article_metadesc = models.CharField('Описание для Open Graph (og:description)', max_length=300)
    article_slug = models.CharField('URL', max_length=200, default='article' + str(datetime.datetime.now()))
    article_short_desc = models.TextField('Короткое описание для Schema', blank=True)
    article_image = models.ImageField('Изображение статьи')
    # case_short_desc = models.TextField('Короткое описание для Schema', blank=True) тут сделать поле редактора
    pub_date = models.DateTimeField(default=datetime.datetime.now)
    category_article = models.ManyToManyField(ArticleCategory, blank=True)

    def __str__(self):
        return self.article_name

    def get_absolute_url(self):
        return reverse('article', args=[self.article_slug])
    


class CaseCategory(models.Model):
    cat_name = models.CharField('Название категории кейсов', max_length=200)
    cat_title = models.CharField('Заголовок для Open Graph (og:title)', max_length=200, blank=True)
    cat_metadesc = models.CharField('Описание для Open Graph (og:description)', max_length=300, blank=True)
    cat_slug = models.CharField('URL', max_length=200, default='slug' + str(datetime.datetime.now()))
    cat_short_desc = models.TextField('Короткое описание', blank=True)
    cat_image = models.ImageField('Изображение категории', default='placeholder.jpg')
    pub_date = models.DateTimeField(default=datetime.datetime.now)
    

    def __str__(self):
        return self.cat_name

    def get_absolute_url(self):
        return reverse('casecat', args=[self.cat_slug])
    
class Case(models.Model):
    case_name = models.CharField('Заголовок H1', max_length=200)
    case_title = models.CharField('Заголовок для Open Graph (og:title)', max_length=200)
    case_metadesc = models.CharField('Описание для Open Graph (og:description)', max_length=300)
    case_slug = models.CharField('URL', max_length=200, default='article' + str(datetime.datetime.now()))
    case_short_desc = models.TextField('Короткое описание для Schema', blank=True)
    case_image = models.ImageField('Изображение кейса')
    # case_short_desc = models.TextField('Короткое описание для Schema', blank=True) тут сделать поле редактора
    pub_date = models.DateTimeField(default=datetime.datetime.now)
    category_case = models.ManyToManyField(CaseCategory, blank=True)

    def __str__(self):
        return self.case_name

    def get_absolute_url(self):
        return reverse('case', args=[self.case_slug])
    



class CategoryWebinar(models.Model):
    cat_name = models.CharField('Название категории вебинаров', max_length=200)
    cat_title = models.CharField('Заголовок для Open Graph (og:title)', max_length=200, blank=True)
    cat_metadesc = models.CharField('Описание для Open Graph (og:description)', max_length=300, blank=True)
    cat_slug = models.CharField('URL', max_length=200, default='slug' + str(datetime.datetime.now()))
    cat_short_desc = models.TextField('Короткое описание', blank=True)
    cat_image = models.ImageField('Изображение категории', default='placeholder.jpg')
    pub_date = models.DateTimeField(default=datetime.datetime.now)

    def __str__(self):
        return self.cat_name

    def get_absolute_url(self):
        return reverse('catweb', args=[self.cat_slug])
    
class Webinar(models.Model):
    webinar_name = models.CharField('Название', max_length=200)
    webinar_title = models.CharField('Заголовок для Open Graph (og:title)', max_length=200)
    webinar_metadesc = models.CharField('Описание для Open Graph (og:description)', max_length=300)
    webinar_slug = models.CharField('URL', max_length=200, default='article' + str(datetime.datetime.now()))
    # webinar_short_desc = models.TextField('Короткое описание для Schema', blank=True) тут сделать поле редактора
    webinar_image = models.ImageField('Изображение вебинара')
    pub_date = models.DateTimeField(default=datetime.datetime.now)
    category_web = models.ManyToManyField(CategoryWebinar,blank=True)
    persons_web = models.ManyToManyField(Person,blank=True)


    def __str__(self):
        return self.webinar_name

    def get_absolute_url(self):
        return reverse('web', args=[self.webinar_slug])
    

class Review(models.Model):
    review_name = models.CharField('Название отзыва', max_length=200)
    rewiew_person = models.CharField('Автор персона', max_length=200)
    rewiew_job = models.CharField('Автор должность', max_length=200)
    rewiew_company = models.CharField('Автор компания', max_length=200)
    rewiew_text = models.TextField('Текст отзыва', blank=True)
    rewiew_image = models.ImageField('Скан отзыва')
    review_video = models.CharField('Ссылка на видео', max_length=200, blank=True)
    pub_date = models.DateTimeField(default=datetime.datetime.now)


    def __str__(self):
        return self.review_name