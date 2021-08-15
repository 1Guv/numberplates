import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ContentService } from 'src/app/_services/content.service';
import { NumberPlatesService } from 'src/app/_services/number-plates.service';
import { WindowsResizeService } from 'src/app/_services/windows-resize.service';

export interface SampleNumberPlateSet {
  sampleSet?: Array<CustomerPlate>;
  currentAPPlateSet?: Array<CustomerPlate>;
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
  filter = new FormControl('');
  filter$: Observable<string>;
  filteredNumberPlates$: Observable<any>;
  toggleCardOrListView: FormGroup;

  constructor(
    private contentService: ContentService,
    private windowsResizeService: WindowsResizeService,
    private numberPlateService: NumberPlatesService,
    private fb: FormBuilder
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

    this.filter$ = this.filter.valueChanges.pipe(startWith(''));

    this.filteredNumberPlates$ =
      combineLatest(this.numberPlates$, this.filter$)
      .pipe(
        map(
          ([numberplates, filterString]) =>
            numberplates.filter((plate: CustomerPlate) => {
              return plate.meanings.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
              plate.plateCharacters.replace(/\s/g, '').toLowerCase().indexOf(filterString.replace(/\s/g, '').toLowerCase()) !== -1;
            })
          )
      )

    this.createPlateViewForm();
  }

  createPlateViewForm() {
    this.toggleCardOrListView = this.fb.group({
      cardView: [false],
      listView: [true]
    })
  }

  toggleView(viewType: any) {
    if (viewType === 'List') {
      this.toggleCardOrListView.get('listView').value ?
      this.toggleCardOrListView.patchValue({cardView:  true}) :
      this.toggleCardOrListView.patchValue({cardView:  false});
    }

    if (viewType === 'Cards') {
      this.toggleCardOrListView.get('cardView').value ?
      this.toggleCardOrListView.patchValue({listView:  true}) :
      this.toggleCardOrListView.patchValue({listView:  false});
    }
  }

  getHeaderInfo() {
    this.searchContent$ = this.contentService.content$.pipe(map(content => content.search));
  }

  getNumberPlates() {
    // this.numberPlates$ = this.numberPlateService.samplePlates$.pipe(map(numberplate => numberplate.sampleSet));
    this.numberPlates$ = this.numberPlateService.actualAPPlates$.pipe(map(numberplate => numberplate.currentAPPlateSet));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

}
