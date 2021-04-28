import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('moveplus') moveplus: ElementRef;
  @ViewChild('movemessage') movemessage: ElementRef;
  @ViewChild('movesitemap') movesitemap: ElementRef;

  constructor() { }

  ngOnInit(): void {
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

  anio :number = new Date().getFullYear();
}

