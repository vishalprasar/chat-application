import { TestBed } from '@angular/core/testing';

import { ApppService } from './appp.service';

describe('ApppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApppService = TestBed.get(ApppService);
    expect(service).toBeTruthy();
  });
});
