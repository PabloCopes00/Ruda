import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  beer: Beer = {
    name: 'New England Ipa',
    type: 'Rubia',
    abv: 3,
    ibu: 3,
    stock: 30,
    price: 600,
    image: 'imagen',
  };

  constructor() {}

  ngOnInit(): void {}
}
