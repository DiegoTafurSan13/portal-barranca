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
import { ServiciosComunidadComponent } from './servicios-comunidad/servicios-comunidad.component';
import { MasBuscadosComponent } from './mas-buscados/mas-buscados.component';
import { NovedadesComunidadComponent } from './novedades-comunidad/novedades-comunidad.component';
import { ProgramasSocialesComponent } from './programas-sociales/programas-sociales.component';

@NgModule({
  declarations: [  NavbarComponent , CarrouselComponent, HeaderComponent,
    FooterComponent, SliderInfoComponent, EventComponent,
    AditionalComponent, AccesosDirectosComponent,
    ServiciosComunidadComponent, MasBuscadosComponent, NovedadesComunidadComponent,
    ProgramasSocialesComponent],

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
    AccesosDirectosComponent,
    MasBuscadosComponent,
    ServiciosComunidadComponent,
    NovedadesComunidadComponent,
    ProgramasSocialesComponent
  ],
})
export class SharedModule { }
