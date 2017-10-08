import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

export interface CityWeather {
  name: string;
  main: {
    humidity: number;
    pressure: number;
    temp: number;
  }
}

@Injectable()
export class CityWeatherResolverService {

  readonly key = 'ac5cc79f3b2190104ebc771f71b3a752';

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CityWeather> {
    const name = route.params['city'];
    return this.http.get<CityWeather>('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&units=metric&APPID=' + this.key);
  }
}
