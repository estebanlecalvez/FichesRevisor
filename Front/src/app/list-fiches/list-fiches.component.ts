import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FicheService } from '../fiche.service';
import { Sheet } from '../sheet';

@Component({
  selector: 'app-list-fiches',
  templateUrl: './list-fiches.component.html',
  styleUrls: ['./list-fiches.component.sass']
})
export class ListFichesComponent implements OnInit {
  fiches: Observable<Sheet[]>;
  constructor(private sheetService: FicheService) { }

  ngOnInit() {
    this.fiches = this.sheetService.getFiches();
  }



}
