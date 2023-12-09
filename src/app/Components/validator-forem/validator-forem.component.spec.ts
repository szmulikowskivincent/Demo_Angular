import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorForemComponent } from './validator-forem.component';

describe('ValidatorForemComponent', () => {
  let component: ValidatorForemComponent;
  let fixture: ComponentFixture<ValidatorForemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatorForemComponent]
    });
    fixture = TestBed.createComponent(ValidatorForemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
