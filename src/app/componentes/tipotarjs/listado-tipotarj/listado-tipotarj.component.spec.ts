import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTipotarjComponent } from './listado-tipotarj.component';

describe('ListadoTipotarjComponent', () => {
  let component: ListadoTipotarjComponent;
  let fixture: ComponentFixture<ListadoTipotarjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTipotarjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTipotarjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
