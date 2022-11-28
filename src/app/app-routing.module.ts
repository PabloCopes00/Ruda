import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerAboutComponent } from './beer-about/beer-about.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerRudaComponent } from './beer-ruda/beer-ruda.component';

const routes: Routes = [
  {
    
    path: '',
    redirectTo: 'beers', // aca cambiar por home y hacer un home copado.
    pathMatch: 'full',    
  },
  {
    path: 'home',
    redirectTo: 'beers',  //directamente component: y mandar el component del home.
    pathMatch: 'full',  
  },
  {
    path: 'beers',
    component: BeerRudaComponent,  
  },
  {
    path: 'about',
    component: BeerAboutComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
