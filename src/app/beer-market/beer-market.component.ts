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

  constructor(private cart: BeerCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {
  }

}
