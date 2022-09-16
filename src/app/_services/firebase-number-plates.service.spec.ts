import { TestBed } from '@angular/core/testing';

import { FirebaseNumberPlatesService } from './firebase-number-plates.service';

describe('FirebaseNumberPlatesService', () => {
  let service: FirebaseNumberPlatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseNumberPlatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
