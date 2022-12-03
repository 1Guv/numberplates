import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentService } from 'src/app/_services/content.service';
import { HomeCTA, CTAButtons } from 'src/app/_models/content';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ValuationDialogComponent } from 'src/app/valuation/components/valuation-dialog/valuation-dialog.component';

@Component({
  selector: 'app-home-cta',
  templateUrl: './home-cta.component.html',
  styleUrls: ['./home-cta.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeCtaComponent implements OnInit {

  homeCTA$: Observable<HomeCTA>;
  listingButton$: Observable<CTAButtons>;
  valuationButton$: Observable<CTAButtons>;
  searchButton$: Observable<CTAButtons>;

  constructor(
    private contentService: ContentService,
    public dialog: MatDialog,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.homeCTA$ = this.contentService.content$.pipe(map(content => content.homeCTA));
    this.listingButton$ = this.contentService.content$.pipe(map(content => content.homeCTA.createListingButton));
    this.valuationButton$ = this.contentService.content$.pipe(map(content => content.homeCTA.valuationButton));
    this.searchButton$ = this.contentService.content$.pipe(map(content => content.homeCTA.searchButton));
    // this.testAWSAPI();
  }

  testAWSAPI() {
    // const urlTest = 'https://16lvlx4jr7.execute-api.eu-west-1.amazonaws.com';
    const urlPlates = 'https://6c12a56dr3.execute-api.eu-west-1.amazonaws.com';

    let aws = this.http.get(urlPlates + '/plates');

    aws.pipe(
      tap((data) => console.log(data))
    )
    .subscribe();
  }

  onValuation() {
    this.dialog.open(ValuationDialogComponent);
  }

}
