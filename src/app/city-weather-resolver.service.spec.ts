import { TestBed, inject } from '@angular/core/testing';

import { CityWeatherResolverService } from './city-weather-resolver.service';

describe('CityWeatherResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityWeatherResolverService]
    });
  });

  it('should be created', inject([CityWeatherResolverService], (service: CityWeatherResolverService) => {
    expect(service).toBeTruthy();
  }));
});
