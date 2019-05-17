import { TestBed } from '@angular/core/testing';

import { BrowserGlobalsService } from './browser-globals.service';

describe('BrowserGlobalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserGlobalsService = TestBed.get(BrowserGlobalsService);
    expect(service).toBeTruthy();
  });
});
