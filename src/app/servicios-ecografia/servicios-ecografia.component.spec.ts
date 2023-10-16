import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEcografiaComponent } from './servicios-ecografia.component';

describe('ServiciosEcografiaComponent', () => {
  let component: ServiciosEcografiaComponent;
  let fixture: ComponentFixture<ServiciosEcografiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiciosEcografiaComponent]
    });
    fixture = TestBed.createComponent(ServiciosEcografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
