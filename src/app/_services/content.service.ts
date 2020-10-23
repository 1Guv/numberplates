import { Injectable } from '@angular/core';
import { Content, InputFields } from '../_models/content';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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

  addManufacturers(manufacturers: Array<InputFields>) {
    this.content$.subscribe(content => {
      content.createListing.carManufacturers.inputFields = manufacturers;
    })
    this.$manufacturers.next(this.content$);
  }
}
