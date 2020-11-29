import { Injectable } from '@angular/core';
import { Content, InputFields } from '../_models/content';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  $manufacturers = new Subject<any>();
  content$: Observable<Content>;

  constructor(private http: HttpClient) {
    this.content$ = this.http.get<Content>('./assets/data/content.json').pipe(shareReplay(1));
   }

  addManufacturers(manufacturers: Array<InputFields>, section: string) {
    this.content$.subscribe(content => {
      content.createListing[section].inputFields = manufacturers;
    })
    this.$manufacturers.next(this.content$);
  }

  getPlates() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
      method: 'GET',
      mode: 'no-cors'
    };

    return this.http.get('https://www.apnaplates.com/plates_for_sales/getAutoSuggestionForPlates', requestOptions);
  }
}
