import { TestBed, inject } from '@angular/core/testing';

import { GitHubServiceService } from './git-hub-service.service';

describe('GitHubServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubServiceService]
    });
  });

  it('should be created', inject([GitHubServiceService], (service: GitHubServiceService) => {
    expect(service).toBeTruthy();
  }));
});
