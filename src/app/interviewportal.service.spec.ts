import { TestBed } from '@angular/core/testing';

import { InterviewportalService } from './interviewportal.service';

describe('InterviewportalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewportalService = TestBed.get(InterviewportalService);
    expect(service).toBeTruthy();
  });
});
