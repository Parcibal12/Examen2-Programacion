import { TestBed } from '@angular/core/testing';

import { IdeaService } from './idea.servicio';

describe('IdeaService', () => {
  let service: IdeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
