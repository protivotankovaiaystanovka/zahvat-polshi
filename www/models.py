from django.db import models

class Manga(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название')
    cover = models.ImageField(upload_to='manga_covers/', verbose_name='Обложка')

    def __str__(self):
        return self.name

# Create your models here.
