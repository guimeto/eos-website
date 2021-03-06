    # -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.views.generic import TemplateView
from station.models import Station


# Template d'une view

class SentinelGaultView(TemplateView):
    template_name = "instrumentation/gault.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Le titre dans l\'onglet de la page'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context



class SentinelXView(TemplateView):
    template_name = "instrumentation/sentinel2.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Le titre dans l\'onglet de la page'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context


class Sentinel2View(TemplateView):
    template_name = "instrumentation/sentinel2.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Sentinel 2 titre de la page dans longlet a changer'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context


class Sentinel3View(TemplateView):
    template_name = "instrumentation/sentinel3.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Sentinel 3 titre a garder comme tu veux'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context


