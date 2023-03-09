import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEstadoComponent } from './nuevo-estado.component';

describe('NuevoEstadoComponent', () => {
  let component: NuevoEstadoComponent;
  let fixture: ComponentFixture<NuevoEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
