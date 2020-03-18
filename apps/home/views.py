# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf import settings
from django.shortcuts import render


# Create your views here.
from django.views.generic import TemplateView

from station.models import Station


def index(request):
    return render(request, 'home/home.html', {'title': 'Home'})


class HomeView(TemplateView):
    template_name = "home/home.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['stations'] = Station.objects.all().values('id', 'name')
        context['title'] = 'Home'
        return context
