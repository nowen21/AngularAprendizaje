import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEstadoComponent } from './listado-estado.component';

describe('ListadoEstadoComponent', () => {
  let component: ListadoEstadoComponent;
  let fixture: ComponentFixture<ListadoEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
