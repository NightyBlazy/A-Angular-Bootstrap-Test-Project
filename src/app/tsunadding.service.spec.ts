import { TestBed } from '@angular/core/testing';

import { TsunaddingService } from './tsunadding.service';

describe('TsunaddingService', () => {
  let service: TsunaddingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TsunaddingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
