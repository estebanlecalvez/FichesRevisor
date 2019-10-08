import { Component, OnInit } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';

@Component({
  selector: 'fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.sass']
})
export class FicheComponent implements OnInit {
  public editorData = "Ici, remplissez le contenu de votre fiche de révision.";
  title = 'Front';

  public onChange(event: CKEditor4.EventInfo) {
    this.editorData = unescape(encodeURIComponent(event.editor.getData()));
  }
  constructor() { }

  ngOnInit() {
  }


}
