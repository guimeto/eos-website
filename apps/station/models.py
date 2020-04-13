from django.db import models
from django_mysql import models as special_models


class Station(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField()
    dir_name = models.TextField()
    meteograms = special_models.Bit1BooleanField()
    radar = special_models.Bit1BooleanField()
    disdrometer = special_models.Bit1BooleanField()
    ceilometer = special_models.Bit1BooleanField()

    class Meta:
        managed = False
        db_table = 'station'

