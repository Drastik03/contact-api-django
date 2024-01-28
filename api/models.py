from django.db import models

# Create your models here.
class Person(models.Model):
    image_profile = models.ImageField(upload_to="front-view/src/media/",max_length=255,null=True,blank=True) 
    first_name = models.CharField(max_length=20,blank=False)
    last_name = models.CharField(max_length=20,blank=False)
    email = models.EmailField(blank=True,null=True)
    phone = models.CharField(max_length=10)
    
    def __str__(self):
        return f"Image: {self.image_profile.url}" if self.image_profile else f"Name: {self.first_name}"
 