from django.shortcuts import render
from django.views.generic import TemplateView

from station.models import Station


class HistoricView(TemplateView):
    template_name = "about/historic.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['stations'] = Station.objects.all().values('id', 'name')
        context['title'] = 'Historic'
        return context


class TeamView(TemplateView):
    template_name = "about/team.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['stations'] = Station.objects.all().values('id', 'name')
        context['title'] = 'Team'
        return context

