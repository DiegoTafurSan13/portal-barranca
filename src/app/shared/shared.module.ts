import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [  NavbarComponent , CarrouselComponent, HeaderComponent],

  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    CarrouselComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
