from django.urls import path

from . import views

urlpatterns = [
    path('Gault', views.SentinelGaultView.as_view(), name='sentinelGault_instrumentation'),
    path('sentinel2', views.Sentinel2View.as_view(), name='sentinel2_instrumentation'),
    path('sentinel3', views.Sentinel3View.as_view(), name='sentinel3_instrumentation'),
    path('Scanning_Doppler', views.ScanningView.as_view(), name='scanning_doppler_instrumentation'),
    path('AERI', views.AERIView.as_view(), name='aeri'),
    path('mobile_labs', views.LABSView.as_view(), name='mobile_labs'),
    path('must', views.MustView.as_view(), name='must'),
    path('eosBuild', views.EOS_BuildingView.as_view(), name='eosBuild'),
    path('biology', views.BiologyView.as_view(), name='biology'),
    

    ]
