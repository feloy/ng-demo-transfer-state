import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

export interface CityWeather {
  name: string;
  main: {
    humidity: number;
    pressure: number;
    temp: number;
  }
}

const RESULT_KEY = makeStateKey<CityWeather>('city-weather-resolver.result');

@Injectable()
export class CityWeatherResolverService {

  readonly key = 'ac5cc79f3b2190104ebc771f71b3a752';

  private result: CityWeather;

  constructor(private http: HttpClient, private readonly transferState: TransferState) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CityWeather> {
    const found = this.transferState.hasKey(RESULT_KEY);
    if (found) {
      const res = Observable.of(this.transferState.get<CityWeather>(RESULT_KEY, null));
      this.transferState.remove(RESULT_KEY);
      return res;
    } else {
      this.transferState.onSerialize(RESULT_KEY, () => this.result);
      const name = route.params['city'];
      return this.http.get<CityWeather>('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&units=metric&APPID=' + this.key)
        .do(result => this.result = result);
    }
  }
}
