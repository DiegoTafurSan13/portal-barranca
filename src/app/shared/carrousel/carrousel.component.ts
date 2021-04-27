import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  dataCarrousel: any[] = [];

  @ViewChild('moveplus') moveplus: ElementRef;
  @ViewChild('movemessage') movemessage: ElementRef;
  @ViewChild('movesitemap') movesitemap: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.addDataCarrousel();
  }

  addDataCarrousel() {
    this.dataCarrousel = [
      {
        "title": "Con el alma,rebosante ...",
        "subtitle": "¡DE UN CARRIÑO INFINITO Y LEAL!",
        "url": "http://www.munibarranca.gob.pe/mpb/images/slider/slider2/slider01.jpg"
      },
      {
        "title": "Orgulloso, placentero ...",
        "subtitle": "¡CON MI CANTO TE VOY A BESAR!",
        "url": "http://www.munibarranca.gob.pe/mpb/images/slider/slider2/2.jpg"
      },
      {
        "title": "Y en el mástil, de mi pecho ...",
        "subtitle": "¡CERCA O LEJOS MI VOZ GRITARÁ!",
        "url": "http://www.munibarranca.gob.pe/mpb/images/slider/slider2/slider02.jpg"
      },
      {
        "title": "Barranca mi Tierra",
        "subtitle": "¡EREZ PAZ Y ERES LUZ EN MI ANDAR!",
        "url": "http://www.munibarranca.gob.pe/mpb/images/slider/slider2/slider05.jpg"
      },
      {
        "title": "Tu nombre, Barranca ...",
        "subtitle": "¡ES LA FUERZA QUE ME HACE TRIUNFAR!",
        "url": "http://www.munibarranca.gob.pe/mpb/images/slider/slider2/5.jpg"
      },
      {
        "title": "Por lo noble de todo lo bueno ...",
        "subtitle": "¡Y LA GLORIA DE TODO SENTIR!",
        "url": "http://www.munibarranca.gob.pe/mpb/images/slider/slider2/3.jpg"
      }
    ];
  }

  addMoveIcons(i:number) {
    switch (i) {
      case 1 :
        this.moveplus.nativeElement.classList.add("bx-tada");  
      break;
      case 2 :
        this.movemessage.nativeElement.classList.add("bx-tada");  
      break;
      case 3 :
        this.movesitemap.nativeElement.classList.add("bx-tada");  
      break;
    }
    

  }
  removeMoveIcons(i:number){
    switch (i) {
      case 1 :
        this.moveplus.nativeElement.classList.remove("bx-tada");  
      break;
      case 2 :
        this.movemessage.nativeElement.classList.remove("bx-tada");  
      break;
      case 3 :
        this.movesitemap.nativeElement.classList.remove("bx-tada");  
      break;
    }
  }
}
