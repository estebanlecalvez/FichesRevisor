import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from "jquery";
import { FicheService } from '../fiche.service';
import { Observable } from 'rxjs';
import { Sheet } from '../sheet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showfiche',
  templateUrl: './showfiche.component.html',
  styleUrls: ['./showfiche.component.sass']
})

export class ShowficheComponent implements OnInit {
  public scrollVerticalPosition;
  public windowHeight;
  public percentage;
  fiche: Observable<Sheet>;
  private id;
  constructor(private sheetService: FicheService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.fiche= this.sheetService.getFiche(this.id);
    // this.fiche = ocjectOfFiche[0];
    this.fiche.subscribe((res) => this.fiche = res[0]);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  setPercentage(event) {
    var h = document.documentElement,
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';
    var result = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    $('.bar-long').css('width', result + "%");
  }

  deleteFiche(event){
    event.preventDefault();
    console.log("delete fiche");
    this.sheetService.deleteFiche(this.id);
    window.location.href = "/fiches";
  }

  back(event){
    event.preventDefault();
    window.location.href = "/fiches";
  }
}
