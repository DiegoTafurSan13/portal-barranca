import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosComunidadComponent } from './servicios-comunidad.component';

describe('ServiciosComunidadComponent', () => {
  let component: ServiciosComunidadComponent;
  let fixture: ComponentFixture<ServiciosComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
