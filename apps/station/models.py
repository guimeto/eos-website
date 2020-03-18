from django.db import models


class Station(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField()
    meteogram_data = models.TextField(blank=True, null=True)
    radar_data = models.TextField(blank=True, null=True)
    disdrometer_data = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'station'

