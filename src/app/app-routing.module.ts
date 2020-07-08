import { NgModule } from '@angular/core';
import {Routes, RouterModule} from'@angular/router'
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

const app_routing: Routes=[
    {path:'home', component: PortafolioComponent},
    {path:'about',component: AboutComponent},
    {path: 'item/:id', component: ItemComponent},
    {path: 'buscar/:termino', component: BuscarComponent},
    {path: '**', pathMatch:'full', redirectTo:'home'}
]

@NgModule({
  imports:[
    RouterModule.forRoot(app_routing,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModulo{

}