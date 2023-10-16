import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiologiaComponent } from './cardiologia.component';

describe('CardiologiaComponent', () => {
  let component: CardiologiaComponent;
  let fixture: ComponentFixture<CardiologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardiologiaComponent]
    });
    fixture = TestBed.createComponent(CardiologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
