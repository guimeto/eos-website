from django.urls import path

from . import views

urlpatterns = [
    path('historic', views.HistoricView.as_view(), name='historic'),
    path('team', views.TeamView.as_view(), name='team'),
]
