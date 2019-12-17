import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';
import * as $ from 'jquery';
import { FicheService } from 'src/app/fiche.service';

@Component({
  selector: 'fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.sass']
})
export class FicheComponent implements OnInit {
  public sheetContent = "Ici, remplissez le contenu de votre fiche de révision.";
  sheetTitle = "Python";
  image;
  source = "";
  actualDate = new Date().toLocaleDateString();
  sheetAuteur = "";
  sheetCategorie = "";

  constructor(private sheetService: FicheService) { }

  ngOnInit() {
  }

  // Emit an event when a file has been picked. Here we return the file itself
  @Output() onChangePhoto: EventEmitter<File> = new EventEmitter<File>();

  // If the input has changed(file picked) we project the file into the img previewer
  updateSource($event: Event) {
    // We access he file with $event.target['files'][0]
    this.projectImage($event.target['files'][0]);
  }

  // Uses FileReader to read the file from the input
  projectImage(file: File) {
    let reader = new FileReader;
    // TODO: Define type of 'e'
    reader.onload = (e: any) => {
      // Simply set e.target.result as our <img> src in the layout
      this.source = e.target.result;
      this.onChangePhoto.emit(file);
    };
    // This will process our file and get it's attributes/data
    this.image = reader.readAsDataURL(file);
    console.log(this.image);
  }

  onKeyTitle(event) {
    this.sheetTitle = event.target.value;
  }

  onKeyAuteur(event) {
    this.sheetAuteur = event.target.value;
  }

  onKeyCategorie(event) {
    this.sheetCategorie = event.target.value;
  }

  public onChangeEditor(event: CKEditor4.EventInfo) {
    this.sheetContent = event.editor.getData();
    $("#cardContent").html(this.sheetContent);
  }

  addFiche(event) {
    event.preventDefault();
    console.log("add sheet front");
    this.sheetService.addFiche({
      "titre": this.sheetTitle || "",
      "image": this.source || "",
      "categorie": this.sheetCategorie || "Pas de catégorie",
      "date_crea": new Date().toLocaleDateString(),
      "date_last_maj": new Date().toLocaleDateString(),
      "contenu": this.sheetContent || "<p></p>",
      "auteur": this.sheetAuteur || "Anonyme"
    });
  }



}
