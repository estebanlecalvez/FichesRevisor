from django.urls import path
from . import views

urlpatterns = [
    path('api', views.index),
    path('api/object', views.route_object),
    path('api/add_author', views.save_author),
    path('api/authors', views.get_authors),
    path('api/author/<int:id>', views.get_author),
    path('api/sheets',views.get_sheets),
    path('api/sheet/<int:id>',views.get_sheet),
    path('api/add_sheet',views.save_sheet),
    path('api/delete_sheet/<int:id>',views.delete_sheet)
]
