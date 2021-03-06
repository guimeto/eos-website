from django.urls import path

from .views import *

urlpatterns = [
    path('<int:station_id>/live-data', StationLiveDataView.as_view()),
    path('<int:station_id>/meteograms', StationMeteogramsView.as_view()),
    path('<int:station_id>/radar', StationRadarView.as_view()),
    path('<int:station_id>/disdrometer', StationDisdrometerView.as_view()),
    path('<int:station_id>/ceilometer', StationCeilometerView.as_view()),
]