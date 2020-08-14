import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentService } from 'src/app/_services/content.service';
import { HomeCTA, CTAButtons } from 'src/app/_models/content';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  constructor(private contentService: ContentService) { }

  ngOnInit() {

    this.homeCTA$ = this.contentService.content$.pipe(map(content => content.homeCTA));
    this.listingButton$ = this.contentService.content$.pipe(map(content => content.homeCTA.createListingButton));
    this.valuationButton$ = this.contentService.content$.pipe(map(content => content.homeCTA.valuationButton));
    this.searchButton$ = this.contentService.content$.pipe(map(content => content.homeCTA.searchButton));
  }

  

}
