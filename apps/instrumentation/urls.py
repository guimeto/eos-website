from django.urls import path

from . import views

urlpatterns = [
    path('Gault', views.SentinelGaultView.as_view(), name='sentinelGault_instrumentation'),
    path('sentinel2', views.Sentinel2View.as_view(), name='sentinel2_instrumentation'),
    path('sentinel3', views.Sentinel3View.as_view(), name='sentinel3_instrumentation'),


    ]
