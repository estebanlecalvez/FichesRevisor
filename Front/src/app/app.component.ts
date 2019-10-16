import { Component } from '@angular/core';
import { CKEditor4 } from 'ckeditor4-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public editorData = "Ici, remplissez le contenu de votre fiche de révision.";
  title = 'Front';

  public onChange(event: CKEditor4.EventInfo) {
    this.editorData = unescape(encodeURIComponent(event.editor.getData()));
  }
}
