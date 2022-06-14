from django.urls import path

from . import views
from .views import WebcamView

urlpatterns = [
    path('', WebcamView.as_view(), name='webcam'),
]
