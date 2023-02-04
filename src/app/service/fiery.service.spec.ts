import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FieryService } from './fiery.service';

describe('FieryService', () => {
  let service: FieryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(FieryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
