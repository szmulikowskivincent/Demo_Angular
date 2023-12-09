import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { authGuard } from 'src/app/Form-Guard/Service/auth.service';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
