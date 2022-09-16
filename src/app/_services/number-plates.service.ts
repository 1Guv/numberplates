import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { CustomerPlate, SampleNumberPlateSet } from '../search/number-plate-search/number-plate-search.component';

@Injectable({
  providedIn: 'root'
})
export class NumberPlatesService {

  // Http calls to actual plates which are stored in a JSON file stored locally
  samplePlates$: Observable<SampleNumberPlateSet>;
  actualAPPlates$: Observable<SampleNumberPlateSet>;

  constructor(private http: HttpClient) {
    this.samplePlates$ = this.http.get<SampleNumberPlateSet>('./assets/data/plates_for_search.json')
      .pipe(shareReplay(1));

    this.actualAPPlates$ = this.http.get<SampleNumberPlateSet>('./assets/data/actual_plates_from_ap.json')
      .pipe(shareReplay(1));
  }


}
