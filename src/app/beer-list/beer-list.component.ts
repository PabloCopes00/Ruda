import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beer = {
    "name": "New England Ipa",
    "type": "Rubia",
    "abvibu": "6% / 45",
    "stock": 30,
    "price": 600
  };

  constructor() { }

  ngOnInit(): void {
  }

}
