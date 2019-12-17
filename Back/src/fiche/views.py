from django.core.serializers import serialize
from django.http import HttpResponse, JsonResponse
from .models import Sheet, Auteur
from datetime import date
from django.views.decorators.csrf import csrf_exempt
import json


def index(param):
    return HttpResponse('Test')


def route_object(param):
    author = Auteur(nom='Le Calvez', prenom='Kévin', mail='Test@Test.fe', mot_de_passe='Test')
    author.save()

    sheatSerialize = serialize('json', Sheet.objects.all())
    # print(sheet.contenu)
    # dump = json.dumps(sheet)
    # serialized_obj = serializers.serialize('json', [sheet, ])
    # sheetJson = serializers.serialize('json', sheet, cls=LazyEncoder)
    return HttpResponse(sheatSerialize)


def get_authors(param):
    return HttpResponse(serialize('json', Auteur.objects.all()))


def save_author(param):
    author = Auteur(nom='Le Calvez', prenom='Kévin', mail='Test@Test.fe', mot_de_passe='Test')
    author.save()
    return "Utilisateur ajouté."


def get_author(id):
    return HttpResponse(serialize('json',Auteur.objects.filter(pk=id)))


def get_sheets(param):
    return HttpResponse(serialize('json', Sheet.objects.all()))


@csrf_exempt
def save_sheet(request):
    jsonParsed = json.loads(request.body)
    titre = jsonParsed["titre"]
    image = jsonParsed["image"]
    categorie = jsonParsed["categorie"]
    date_crea = jsonParsed["date_crea"]
    date_last_maj = jsonParsed["date_last_maj"]
    contenu = jsonParsed["contenu"]
    auteur = jsonParsed["auteur"]
    print(titre)
    sheet = Sheet(titre=titre,image=image,categorie=categorie,date_crea=date_crea,date_last_maj=date_last_maj,contenu=contenu,
                  auteur=auteur)
    sheet.save()
    return HttpResponse(sheet)


def get_sheet(param,id):
    return HttpResponse(serialize('json',Sheet.objects.filter(pk=id)))

