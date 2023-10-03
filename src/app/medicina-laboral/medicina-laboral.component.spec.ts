import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinaLaboralComponent } from './medicina-laboral.component';

describe('MedicinaLaboralComponent', () => {
  let component: MedicinaLaboralComponent;
  let fixture: ComponentFixture<MedicinaLaboralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinaLaboralComponent]
    });
    fixture = TestBed.createComponent(MedicinaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
