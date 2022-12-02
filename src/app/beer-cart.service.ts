import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Beer } from './beer-list/Beer';

/**
 * Maneja la logica del carrito
 * 
 */
 @Injectable({
  providedIn: 'root'
})
export class BeerCartService {

  private _cartList: Beer[] = [];
  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject(this._cartList);
   BeerCartService: any;
  constructor() { }
  
  addToCart(beer: Beer) {
    let item: Beer = this._cartList.find((v1) => v1.name == beer.name)!;
    if(!item) {
      this._cartList.push({ ... beer});
    } else {
      item.quantity += beer.quantity;
    }
    this.cartList.next(this._cartList);
  }

  emptyCart(){
    this._cartList = [];
    this.cartList.next(this._cartList);
  }

}
