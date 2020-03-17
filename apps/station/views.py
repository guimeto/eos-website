from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'station/station.html', {'title': 'Example page'})
