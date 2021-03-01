import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SwApiService } from './sw-api.service';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { EMPTY, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-sw-container',
  templateUrl: './sw-container.component.html',
  styleUrls: ['./sw-container.component.scss'],
})
export class SwContainerComponent implements OnInit {
  readonly API_PAGINATION = 'https://swapi.dev/api/people/?page=';
  jsonField_URL = 'format=json';
  readonly API_SEARCH = 'https://swapi.dev/api/people/';
  inputSearch = new FormControl();
  resultInput$ = this.inputSearch.valueChanges;
  result$!: Observable<any>;
  total!: number;
  fillHomePageCharacters: any[] = [];
  isResult: boolean = false;

  constructor(private swService: SwApiService, private http: HttpClient) {}

  ngOnInit(): void {
    this.result$ = this.inputSearch.valueChanges.pipe(
      map((value) => value.trim()),
      filter((value) => value.length > 1),
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((value) =>
        this.http.get('https://swapi.dev/api/people/', {
          params: {
            search: value,
            fields: this.jsonField_URL,
          },
        })
      ),
      tap((response: any) => (this.total = response.count)),
      map((res: any) => {
        this.isResult = true;
        return res.results;
      }),
      catchError((error) => {
        console.error(error);
        this.isResult = false;
        return EMPTY;
      })
    );

    this.swService.getCharacters().subscribe((swCharacters: any) => {
      this.fillHomePageCharacters = swCharacters;
    });
  }

  ngOnDestroy() {}
}
