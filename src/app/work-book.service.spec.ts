import { TestBed } from '@angular/core/testing';

import { WorkBookService } from './work-book.service';

describe('WorkBookService', () => {
  let service: WorkBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
