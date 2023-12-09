import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCVComponent } from './forms-cv.component';

describe('FormsCVComponent', () => {
  let component: FormsCVComponent;
  let fixture: ComponentFixture<FormsCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsCVComponent]
    });
    fixture = TestBed.createComponent(FormsCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
