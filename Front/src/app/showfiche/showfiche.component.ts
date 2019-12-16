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
    var currY = $('html').scrollTop();
    var scrollHeight = $('html').height();
    var scrollPercent = (currY / (scrollHeight)) * 100;
    console.log("currY",currY);
    console.log("scrollPercent:",scrollPercent);
    console.log("scrollHeight:",scrollHeight);
    $('.bar-long').css('width', scrollPercent + "%");

  }



}
