from django.urls import path

from . import views

urlpatterns = [
    path('anemometer', views.AnemometerView.as_view(), name='anemometer'),
    path('datalogger', views.DataloggerView.as_view(), name='datalogger')
]
