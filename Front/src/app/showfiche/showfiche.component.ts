import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-showfiche',
  templateUrl: './showfiche.component.html',
  styleUrls: ['./showfiche.component.sass']
})
export class ShowficheComponent implements OnInit {

  public scrollVerticalPosition;
  public windowHeight;
  public percentage;

  constructor() {

  }

  ngOnInit() {

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



}
