import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderInfoComponent } from './slider-info/slider-info.component';
import { EventComponent } from './event/event.component';
import { AditionalComponent } from './aditional/aditional.component';
import { AccesosDirectosComponent } from './accesos-directos/accesos-directos.component';
import { MasBuscadosComponent } from './mas-buscados/mas-buscados.component';

@NgModule({
  declarations: [  NavbarComponent , CarrouselComponent, HeaderComponent, FooterComponent, SliderInfoComponent, EventComponent, AditionalComponent, AccesosDirectosComponent],

  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    CarrouselComponent,
    HeaderComponent,
    FooterComponent,
    SliderInfoComponent,
    EventComponent,
    AditionalComponent,
    AccesosDirectosComponent]
})
export class SharedModule { }
