from django.urls import path

from . import views
from .views import ContactView

urlpatterns = [
    path('', ContactView.as_view(), name='contact'),
]