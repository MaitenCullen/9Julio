import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OftalmologiaComponent } from './oftalmologia.component';

describe('OftalmologiaComponent', () => {
  let component: OftalmologiaComponent;
  let fixture: ComponentFixture<OftalmologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OftalmologiaComponent]
    });
    fixture = TestBed.createComponent(OftalmologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
