import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined(); // Use toBeDefined() instead of toBeTruthy()
  });

  it('should have default values', () => {
    expect(component.isSubmitted).toBe(false);
    // Add more expectations for other default values if needed
  });
});

