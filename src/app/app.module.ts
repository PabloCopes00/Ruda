import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerMarketComponent } from './beer-market/beer-market.component';
import { BeerAboutComponent } from './beer-about/beer-about.component';
import { BeerRudaComponent } from './beer-ruda/beer-ruda.component';


import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerMarketComponent,
    BeerAboutComponent,
    BeerRudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
