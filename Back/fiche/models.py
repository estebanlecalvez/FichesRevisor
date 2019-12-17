from django.db import models


class Auteur(models.Model):
    nom = models.CharField(max_length=30)
    prenom = models.CharField(max_length=30)
    mail = models.CharField(max_length=50)
    mot_de_passe = models.CharField(max_length=8)


class Sheet(models.Model):
    titre = models.CharField(max_length=30)
    image = models.CharField(max_length=256)
    categorie = models.CharField(max_length=30)
    date_crea = models.CharField(max_length=30)
    date_last_maj = models.CharField(max_length=30)
    contenu = models.TextField()
    auteur = models.CharField(max_length=255)
