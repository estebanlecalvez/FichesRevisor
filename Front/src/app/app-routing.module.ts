import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FicheComponent } from './components/fiche/fiche.component';
import { ListFichesComponent } from './list-fiches/list-fiches.component';
import { ShowficheComponent } from './showfiche/showfiche.component';

const routes: Routes = [
  { path: 'add_fiche', component: FicheComponent },
  { path: 'fiches', component: ListFichesComponent },
  { path: 'fiche/:id', component: ShowficheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
