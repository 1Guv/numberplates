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
  suffixYears$: Observable<any>;
  prefixYears$: Observable<any>;
  currentYears$: Observable<any>;
  about$: Observable<any>;
  howItWorks$: Observable<any>;

  constructor(private http: HttpClient) {
    // this.content$ = this.http.get<Content>('./assets/data/content.json').pipe(shareReplay(1));
    this.content$ = this.http.get<Content>('./assets/data/content-new.json').pipe(shareReplay(1));
    this.suffixYears$ = this.http.get<any>('./assets/data/suffix_years.json').pipe(shareReplay(1));
    this.prefixYears$ = this.http.get<any>('./assets/data/prefix_years.json').pipe(shareReplay(1));
    this.currentYears$ = this.http.get<any>('./assets/data/current_years.json').pipe(shareReplay(1));
    this.about$ = this.http.get<any>('./assets/data/our-story.json').pipe(shareReplay(1));
   }

  addManufacturers(manufacturers: Array<InputFields>, section: string) {
    this.content$.subscribe(content => {
      content.createListing[section].inputFields = manufacturers;
    });
    this.$manufacturers.next(this.content$);
  }

  getPlates() {
    const headerDict = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*'
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
      method: 'GET',
      mode: 'no-cors'
    };

    return this.http.get('https://www.apnaplates.com/plates_for_sales/getAutoSuggestionForPlates', requestOptions);
  }
}
