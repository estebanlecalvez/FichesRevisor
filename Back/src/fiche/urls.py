from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('object', views.route_object),
    path('add_author', views.save_author),
    path('authors', views.get_authors),
    path('author/<int:id>', views.get_author),
    path('sheets',views.get_sheets),
    path('sheet/<int:id>',views.get_sheet),
    path('add_sheet',views.save_sheet)
]
