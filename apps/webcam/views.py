from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView


class WebcamView(TemplateView):
    template_name = "webcam/webcam.html"

