import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-fiches',
  templateUrl: './list-fiches.component.html',
  styleUrls: ['./list-fiches.component.sass']
})
export class ListFichesComponent implements OnInit {
  fiches = [
    {
      "id": 1,
      "title": "Python",
      "categorie": "Developpement",
      "text": "",
      "image": "https://spng.pngfly.com/20181128/rat/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-5bfef9217d4820.5192423615434365775132.jpg",
      "Author": "Esteban",
      "Date_creation": "16/12/2019",
    },
    {
      "id": 2,
      "title": "Java",
      "categorie": "Developpement",

      "text": "",
      "image": "https://spng.pngfly.com/20181128/rat/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-5bfef9217d4820.5192423615434365775132.jpg",
      "Author": "Esteban",
      "Date_creation": "16/12/2019",
    },
    {
      "id": 3,
      "title": "Django",
      "categorie": "Developpement",

      "text": "",
      "image": "https://spng.pngfly.com/20181128/rat/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-5bfef9217d4820.5192423615434365775132.jpg",
      "Author": "Esteban",
      "Date_creation": "16/12/2019",
    },
    {
      "id": 4,
      "title": "C++",
      "categorie": "Developpement",
      "text": "",
      "image": "https://spng.pngfly.com/20181128/rat/kisspng-python-programming-basics-for-absolute-beginners-michigan-python-user-group-5-jul-2-18-5bfef9217d4820.5192423615434365775132.jpg",
      "Author": "Esteban",
      "Date_creation": "16/12/2019",
    },


  ];
  constructor() { }

  ngOnInit() {
  }


}
