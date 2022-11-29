import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [
    {
      name: 'New England Ipa',
      type: 'Rubia',
      abv: 6,
      ibu: 45,
      stock: 30,
      price: 600,
      image: './assets/images/ruda.png',
      clearance: true, //agregar a la BBDD posible null para no crashear tp1 y tp2 de webII
      quantity: 0,
    },
    {
      name: 'Honey Ale',
      type: 'Rubia',
      abv: 6,
      ibu: 12,
      stock: 20,
      price: 600,
      image: './assets/images/ruda.png',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Ginger Ale',
      type: 'Rubia',
      abv: 5,
      ibu: 10,
      stock: 4,
      price: 600,
      image: './assets/images/ruda.png',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Irish Red Ale',
      type: 'Roja',
      abv: 5.5,
      ibu: 23,
      stock: 0,
      price: 600,
      image: './assets/images/ruda.png',
      clearance: false,
      quantity: 0,
    },
  ];

  constructor(private cart: BeerCartService) {}

  ngOnInit(): void {}

  maxReached(m: string) {
    alert(m);
    }

    addToCart(beer: Beer): void {
      this.cart.addToCart(beer);
      beer.stock -= beer.quantity;
      beer.quantity = 0;
    }

  }