import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data:any[]=[];

  constructor() { }

  ngOnInit(): void {
    this.addData();
  }

  addData(){
    this.data=[
      {
        autor:'Joel Quiñones',
        title:'CONSTRUCCIÓN DE PISTAS Y VEREDAS DE LA ASOCIACIÓN DE VIVIENDA VIRGEN DE CHAPI',
        date:'20 ENE 2021',
        url:'http://www.munibarranca.gob.pe/mpb/images/prensa/PRENSA-21.jpg'
      },
      {
        autor:'Joel Quiñones',
        title:'CONSTRUCCIÓN DE PISTAS Y VEREDAS DE LA ASOCIACIÓN DE VIVIENDA VIRGEN DE CHAPI',
        date:'20 ENE 2021',
        url:'http://www.munibarranca.gob.pe/mpb/images/prensa/PRENSA-20.jpg'
      },
      {
        autor:'Joel Quiñones',
        title:'CONSTRUCCIÓN DE PISTAS Y VEREDAS DE LA ASOCIACIÓN DE VIVIENDA VIRGEN DE CHAPI',
        date:'20 ENE 2021',
        url:'http://www.munibarranca.gob.pe/mpb/images/prensa/PRENSA-19.jpg'
      }


    ]
  }
}
