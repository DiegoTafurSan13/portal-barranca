import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiudadComponent } from './ciudad.component';
import { HimnoComponent } from './himno/himno.component';
import { HistoriaComponent } from './historia/historia.component';

const routes: Routes = [
  {
    path:'ciudad',
    component:CiudadComponent,
    children:[
      
      {
        path: 'historia',
        component:HistoriaComponent
      },
      {
        path:'himno',
        component:HimnoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CiudadRoutingModule { }
