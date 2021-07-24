import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentService } from 'src/app/_services/content.service';
import { NumberPlatesService } from 'src/app/_services/number-plates.service';
import { WindowsResizeService } from 'src/app/_services/windows-resize.service';

export interface SampleNumberPlateSet {
  sampleSet: Array<CustomerPlate>
}

export interface CustomerPlate {
  id?: number;
  lCName: string;
  lCNumber: string;
  lCEmail: string;
  initials: string;
  profiletPicUrl: string;
  profiletPicInitials: boolean;
  createdDate: Date;
  plateCharacters: string;
  askingPrice: string;
  plateNegotiable: boolean;
  plateBestOffer: boolean;
  offersOver: boolean;
  orNearestOffer: boolean;
  meanings: string;
  viewsPlaceholder: string;
  messageSeller: string;
  plateListingAccName: string;
  plateListingAccTelNumber: string;
  plateType: string;
  plateCategory: string;
}


@Component({
  selector: 'app-number-plate-search',
  templateUrl: './number-plate-search.component.html',
  styleUrls: ['./number-plate-search.component.scss']
})
export class NumberPlateSearchComponent implements OnInit, OnDestroy {

  searchContent$: Observable<any>;
  numberPlates$: Observable<any>;
  searchPlaceholder = 'Search for name, nickname, surname, anything....';
  opened: boolean;
  currentWidthPx: string;
  currentHeightPx: string;
  resizeSubscription: Subscription;
  subscriptions: Subscription[] = [];
  samplePlatesForSearchJson = '';

  constructor(
    private contentService: ContentService,
    private windowsResizeService: WindowsResizeService,
    private numberPlateService: NumberPlatesService
  ) { }

  ngOnInit() {
    this.getHeaderInfo();
    this.getNumberPlates();

    // Default width when initialised
    this.currentWidthPx = `${window.innerWidth - (window.innerWidth * 0.25)}px`;

    // If window size changes
    this.subscriptions.push(
      this.resizeSubscription = this.windowsResizeService.onResize$
      .subscribe(size => {
        this.currentWidthPx = `${size.innerWidth - (size.innerWidth * 0.25)}px`;
      })
    );
  }

  getHeaderInfo() {
    this.searchContent$ = this.contentService.content$.pipe(map(content => content.search));
  }

  getNumberPlates() {
    this.numberPlates$ = this.numberPlateService.samplePlates$.pipe(map(numberplate => numberplate.sampleSet));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

}
