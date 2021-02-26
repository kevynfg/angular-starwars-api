import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SwApiService {
  readonly API_PAGINATION = 'https://swapi.dev/api/people/?page=';
  jsonField_URL = 'format=json';
  readonly API_SEARCH = 'https://swapi.dev/api/people/?search=';
  allCharacters!: Observable<any>;

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get('https://swapi.dev/api/people/?page=1&format=json');
  }
}
