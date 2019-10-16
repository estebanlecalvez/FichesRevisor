import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FicheComponent } from './fiche/fiche.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheComponent,
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
