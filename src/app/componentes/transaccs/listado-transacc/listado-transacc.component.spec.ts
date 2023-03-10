import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTransaccComponent } from './listado-transacc.component';

describe('ListadoTransaccComponent', () => {
  let component: ListadoTransaccComponent;
  let fixture: ComponentFixture<ListadoTransaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTransaccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTransaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
