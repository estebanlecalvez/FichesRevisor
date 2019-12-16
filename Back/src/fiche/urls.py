from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('object', views.route_object),
    path('save', views.save_author),
    path('authors', views.get_all_author),
    path('findOne/<int:id>', views.get_one_author)
]
