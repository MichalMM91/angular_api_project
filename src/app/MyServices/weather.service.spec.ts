import { TestBed } from '@angular/core/testing';

import { MyDataService } from './weather.service';

describe('WeatherService', () => {
  let service: MyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
