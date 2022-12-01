import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { BeerDataService } from '../beer-data.service';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss'],
})
export class BeerListComponent implements OnInit {
  beers: Beer[] = [];

  constructor(
    private cart: BeerCartService,
    private beerDataService: BeerDataService) {}

  ngOnInit(): void {
    this.beerDataService.getAll()
    .subscribe(beers => this.beers = beers);
    
  }

  maxReached(m: string) {
    alert(m);
    }

    addToCart(beer: Beer): void {
      if (beer.quantity != 0){
        this.cart.addToCart(beer);
        beer.stock -= beer.quantity;
        beer.quantity = 0;
      }
    }

  }