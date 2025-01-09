from django.contrib import admin
from .models import *


admin.site.register(Tweet, admin.ModelAdmin)
admin.site.register(Person, admin.ModelAdmin)
admin.site.register(ArticleCategory, admin.ModelAdmin)
admin.site.register(Article, admin.ModelAdmin)
admin.site.register(CaseCategory, admin.ModelAdmin)
admin.site.register(Case, admin.ModelAdmin)
admin.site.register(CategoryWebinar, admin.ModelAdmin)
admin.site.register(Webinar, admin.ModelAdmin)
admin.site.register(Review, admin.ModelAdmin)

