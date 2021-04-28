import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiudadRoutingModule } from './ciudad-routing.module';
import { CiudadComponent } from './ciudad.component';
import { HistoriaComponent } from './historia/historia.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HimnoComponent } from './himno/himno.component';


@NgModule({
  declarations: [CiudadComponent, HistoriaComponent, HimnoComponent],
  imports: [
    CommonModule,
    CiudadRoutingModule,
    SharedModule
  ]
})
export class CiudadModule { }
