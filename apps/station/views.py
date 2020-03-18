from django.shortcuts import render
from django.views.generic import TemplateView
from .models import Station


class StationMeteogramsView(TemplateView):
    template_name = "station/meteograms.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['station'] = Station.objects.get(pk=self.kwargs['station_id'])
        context['stations'] = Station.objects.all().values('id', 'name')
        context['active_sidebar_tab'] = "meteograms"
        return context


class StationDisdrometerView(TemplateView):
    template_name = "station/disdrometer.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['station'] = Station.objects.get(pk=self.kwargs['station_id'])
        context['stations'] = Station.objects.all().values('id', 'name')
        context['active_sidebar_tab'] = "disdrometer"
        return context


class StationRadarView(TemplateView):
    template_name = "station/radar.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['station'] = Station.objects.get(pk=self.kwargs['station_id'])
        context['stations'] = Station.objects.all().values('id', 'name')
        context['active_sidebar_tab'] = "radar"
        return context
