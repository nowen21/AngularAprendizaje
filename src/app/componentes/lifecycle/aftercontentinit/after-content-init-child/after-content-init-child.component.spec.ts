import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentInitChildComponent } from './after-content-init-child.component';

describe('AfterContentInitChildComponent', () => {
  let component: AfterContentInitChildComponent;
  let fixture: ComponentFixture<AfterContentInitChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterContentInitChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterContentInitChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
