import { TestBed, inject } from '@angular/core/testing';

import { TransformersService } from './transformers.service';

describe('TransformersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformersService]
    });
  });

  it('should be created', inject([TransformersService], (service: TransformersService) => {
    expect(service).toBeTruthy();
  }));
});
