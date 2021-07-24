import { TestBed } from '@angular/core/testing';

import { NumberPlatesService } from './number-plates.service';

describe('NumberPlatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberPlatesService = TestBed.get(NumberPlatesService);
    expect(service).toBeTruthy();
  });
});
