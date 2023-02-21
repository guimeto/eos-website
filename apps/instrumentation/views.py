    # -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.views.generic import TemplateView
from station.models import Station


# Template d'une view

class SentinelGaultView(TemplateView):
    template_name = "instrumentation/gault.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Gault'
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
        context['title'] = 'Climate sentinels'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context


class Sentinel3View(TemplateView):
    template_name = "instrumentation/sentinel3.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Forest Montmorency'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context
    
class ScanningView(TemplateView):
    template_name = "instrumentation/scanning_doppler.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Scanning Doppler'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context
    
    
class AERIView(TemplateView):
    template_name = "instrumentation/aeri.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'AERI'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context

class LABSView(TemplateView):
    template_name = "instrumentation/mobile_labs.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Mobile labs'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context

class MustView(TemplateView):
    template_name = "instrumentation/must.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'MUST'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context

class EOS_BuildingView(TemplateView):
    template_name = "instrumentation/eosBuild.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'EOS Building'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context
    
class BiologyView(TemplateView):
    template_name = "instrumentation/biology.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Biology'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context


class PhenotypingView(TemplateView):
    template_name = "instrumentation/Phenotyping.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Phenotyping'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context
    
class mobileView(TemplateView):
    template_name = "instrumentation/mobile_climate.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Mobile Lab'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context

class MetBoxesView(TemplateView):
    template_name = "instrumentation/MetBoxes.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'MetBoxes'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context

class computerView(TemplateView):
    template_name = "instrumentation/computer.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Computer'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context
    
class pickupView(TemplateView):
    template_name = "instrumentation/pickup.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Pickup'
        context['stations'] = Station.objects.all().values('id', 'name')
        return context
