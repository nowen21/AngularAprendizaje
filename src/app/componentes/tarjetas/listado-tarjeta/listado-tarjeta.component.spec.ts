import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTarjetaComponent } from './listado-tarjeta.component';

describe('ListadoTarjetaComponent', () => {
  let component: ListadoTarjetaComponent;
  let fixture: ComponentFixture<ListadoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTarjetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
