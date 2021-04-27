import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrouselComponent } from './carrousel/carrousel.component';


@NgModule({
  declarations: [  NavbarComponent , CarrouselComponent],

  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    CarrouselComponent,
  ]
})
export class SharedModule { }
