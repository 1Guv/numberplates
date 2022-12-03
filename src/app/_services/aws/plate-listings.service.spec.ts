import { TestBed } from '@angular/core/testing';

import { PlateListingsService } from './plate-listings.service';

describe('PlateListingsService', () => {
  let service: PlateListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlateListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
