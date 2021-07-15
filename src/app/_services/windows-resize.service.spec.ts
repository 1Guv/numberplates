import { TestBed } from '@angular/core/testing';

import { WindowsResizeService } from './windows-resize.service';

describe('WindowsResizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowsResizeService = TestBed.get(WindowsResizeService);
    expect(service).toBeTruthy();
  });
});
