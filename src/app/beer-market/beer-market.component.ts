import { Component, OnInit } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Observable,} from 'rxjs';
import { Beer } from '../beer-list/Beer';
@Component({
  selector: 'app-beer-market',
  templateUrl: './beer-market.component.html',
  styleUrls: ['./beer-market.component.scss']
})
export class BeerMarketComponent implements OnInit {
  cartList$: Observable<Beer[]>;
  beers: Beer[] = [];
  constructor(
    private cart: BeerCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {
    this.cart.cartList
    .subscribe(beers => this.beers = beers);
  }
  total(){
    let sum = 0;
    this.beers.forEach(beer =>{
      sum += (beer.quantity * beer.price);
    })
    return sum;
  } 
}
