from django.urls import path

from . import views
from .views import ContactView

urlpatterns = [
    path('', webcamView.as_view(), name='webcam'),
]
