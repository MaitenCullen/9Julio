import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosBaseComponent } from './servicios-base.component';

describe('ServiciosBaseComponent', () => {
  let component: ServiciosBaseComponent;
  let fixture: ComponentFixture<ServiciosBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosBaseComponent]
    });
    fixture = TestBed.createComponent(ServiciosBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
