from django.db import models

class Auteur(models.Model):
    nom = models.CharField(max_length=30)
    prenom = models.CharField(max_length=30)
    mail = models.CharField(max_length=50)
    mot_de_passe = models.CharField(min_length=8)

class Sheet(models.Model):
    titre = models.CharField(max_length=30)
    image = models.CharField(max_length=256)
    categorie = models.CharField(max_length=30)
    date_crea = models.DateField(max_length=10)
    date_last_maj = models.DateField(max_length=10)
    contenu = models.CharField()
    auteur = models.ForeignKey(Auteur, on_delete=models.CASCADE)
