import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesos-directos',
  templateUrl: './accesos-directos.component.html',
  styleUrls: ['./accesos-directos.component.css']
})
export class AccesosDirectosComponent implements OnInit {

  data: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.addData();
  }

addData() {
    this.data = [
      {
        title: 'FORTALECIENDO LA GESTIÓN DE LAS ORGANIZACIONES SOCIALES',
        info: '#JuntosSíPodemos | Programa virtual de formación: Fortaleciendo la gestión de las organizaciones sociales.'
      },
      {
        title: 'LABORATORIO SOCIAL: CREA TU ORGANIZACIÓN JUVENIL',
        info: '#ProgramaVirtual Laboratorio social: Crea tu organización juvenil.'
      },
      {
        title: 'TALLERES DE VERANO - EDICIÓN VIRTUAL 2021',
        info: '#ProgramaVirtual Laboratorio social: Crea tu organización juvenil.'
      }
    ]
  }

}
