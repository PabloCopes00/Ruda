import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, pipe, tap } from 'rxjs';
import { Beer } from './beer-list/Beer';
const URL = "https://62f3d817a84d8c96812d997f.mockapi.io/ruda/"

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beer[]>{
   return this.http.get<Beer[]>(URL)
   .pipe(
    tap( (beers: Beer[]) =>beers.forEach(beer => beer.quantity = 0))
    
   );
  }
}
