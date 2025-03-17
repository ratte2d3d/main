import { TestBed } from '@angular/core/testing';

import { PersonalResultService } from './personal-result.service';

describe('PersonalResultService', () => {
  let service: PersonalResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
