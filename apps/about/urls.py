from django.urls import path

from . import views

urlpatterns = [
    path('historique', views.history, name='historic'),
    path('team', views.team, name='team'),
]
