import { Injectable } from '@angular/core';
import { Content } from '../_models/content';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  content$: Observable<Content>;

  constructor(private http: HttpClient) {
    this.content$ = this.http.get<Content>('./assets/data/content.json').pipe(shareReplay(1));
   }

  getContent(): any {
    // return this.http.get<Content>('./assets/data/content.json');
  }
}

// TODO: Need to use RxJs shareReplay so the content is not accessed multiple times