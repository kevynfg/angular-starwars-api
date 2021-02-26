import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SwApiService {
  API_URL = 'https://swapi.dev/api/people/?page=1&format=json';

  constructor() {}
}
