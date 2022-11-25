import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beer = {
    "nombre": "New England Ipa",
    "tipo": "Rubia",
    "ABV/IBU": "6%/45",
    "stock": 30,
    "precio": 30

  };

  constructor() { }

  ngOnInit(): void {
  }

}
