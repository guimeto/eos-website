from django.urls import path

from . import views

urlpatterns = [
    path('sentinel1', views.Sentinel1View.as_view(), name='sentinel1_instrumentation'),
    path('sentinel2', views.Sentinel2View.as_view(), name='sentinel2_instrumentation'),
    path('Gault', views.SentinelGaultView.as_view(), name='sentinelGault_instrumentation'),

    ]
