import { Injectable } from '@angular/core';
import { Content } from '../models/header';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  data: Content

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content> {
    return this.http.get<Content>('./assets/data/content.json');
  }
}
