    # -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.views.generic import TemplateView
from station.models import Station


# Create your views here.
class AnemometerView(TemplateView):
    template_name = "instrumentation/anemometer.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['stations'] = Station.objects.all().values('id', 'name')
        context['title'] = 'Anemometer'
        return context


class DataloggerView(TemplateView):
    template_name = "instrumentation/datalogger.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['stations'] = Station.objects.all().values('id', 'name')
        context['title'] = 'Datalogger'
        return context


