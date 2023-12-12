import { TestBed } from '@angular/core/testing';

import { StatisticsService } from './statistics.service';
import { HttpClientModule } from '@angular/common/http';

describe('StatisticsService', () => {
  let service: StatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(StatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
