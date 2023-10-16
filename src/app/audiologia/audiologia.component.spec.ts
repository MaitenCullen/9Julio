import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiologiaComponent } from './audiologia.component';

describe('AudiologiaComponent', () => {
  let component: AudiologiaComponent;
  let fixture: ComponentFixture<AudiologiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiologiaComponent]
    });
    fixture = TestBed.createComponent(AudiologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
