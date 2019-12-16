from django.core.serializers import serialize
from django.http import HttpResponse, JsonResponse
from django.core import serializers
import json
from .models import Sheet, Auteur


def index(param):
    return HttpResponse('Test')


def route_object(param):
    author = Auteur(nom='Le Calvez', prenom='Kévin', mail='Test@Test.fe', mot_de_passe='Test')
    authorSaved = author.save()
    sheet = Sheet(titre='Fiche', image='', categorie='Test cat', date_crea='2020-12-16', date_last_maj='2020-12-16',
                  contenu='Test',
                  auteur=authorSaved)
    sheet.save()
    sheatSerialize = serialize('json', Sheet.objects.all())
    # print(sheet.contenu)
    # dump = json.dumps(sheet)
    # serialized_obj = serializers.serialize('json', [sheet, ])
    # sheetJson = serializers.serialize('json', sheet, cls=LazyEncoder)
    return HttpResponse(sheatSerialize)


# Get All
def get_all_author(param):
    return HttpResponse(serialize('json', Auteur.objects.all()))


# Save
def save_author(param, request):
    author = request.body
    print(author)
    # author = Auteur(nom='Le Calvez', prenom='Kévin', mail='Test@Test.fe', mot_de_passe='Test')
    authorSaved = author.save()
    return None


# Get one
def get_one_author(param, id):
    return HttpResponse(serialize('json', Auteur.objects.get(pk=id)))
