import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { FicheComponent } from './components/fiche/fiche.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ListFichesComponent } from './list-fiches/list-fiches.component';
import { ShowficheComponent } from './showfiche/showfiche.component';

@NgModule({
  declarations: [
    AppComponent,
    FicheComponent,
    ListFichesComponent,
    ShowficheComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    CKEditorModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
