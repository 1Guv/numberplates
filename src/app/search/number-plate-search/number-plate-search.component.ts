import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable, Subscription, of } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { ContentService } from 'src/app/_services/content.service';
import { FirebaseNumberPlatesService } from 'src/app/_services/firebase-number-plates.service';
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
  meanings: string[];
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
  isDataLoaded = false;

  constructor(
    private contentService: ContentService,
    private windowsResizeService: WindowsResizeService,
    private numberPlateService: NumberPlatesService,
    private fb: FormBuilder,
    private firebaseNumberPlatesService: FirebaseNumberPlatesService
  ) { }

  ngOnInit() {
    this.getHeaderInfo();
    // this.getPlatesFromAPNAPLATES();
    this.getPlatesFromAWS();
    // this.getAllPlates();

    // Default width when initialised
    this.currentWidthPx = `${window.innerWidth - (window.innerWidth * 0.25)}px`;

    // If window size changes
    this.subscriptions.push(
      this.resizeSubscription = this.windowsResizeService.onResize$
      .subscribe(size => {
        this.currentWidthPx = `${size.innerWidth - (size.innerWidth * 0.25)}px`;
      })
    );

    this.createPlateViewForm();
  }

  createPlateViewForm() {
    this.toggleCardOrListView = this.fb.group({
      cardView: [false],
      listView: [true]
    });
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

  // getPlatesFromAPNAPLATES() {
  //   // www.apnaplates.com
  //   this.subscriptions.push(
  //     this.contentService
  //     .getPlates()
  //     .pipe(
  //       tap((apPlates) => {
  //         console.log('apPlates', apPlates);
  //       })
  //     )
  //     .subscribe()
  //   );
  // }

  getPlatesFromAWS() {
    // AWS
    this.subscriptions.push(
      this.contentService
      .getPlates()
      .pipe(
        tap((data: any) => {
          console.log('data', data);
          this.numberPlates$ = of(data.listings);
          this.isDataLoaded = true;
          this.filter$ = this.filter.valueChanges.pipe(startWith(''));

          this.filteredNumberPlates$ =
            combineLatest([this.numberPlates$, this.filter$])
            .pipe(
              map(
                ([numberplates, filterString]) => {
                  const filtered = [];

                  numberplates?.filter((plate: CustomerPlate) => {
                    if (plate.plateCharacters.replace(/\s/g, '').toLowerCase().indexOf(filterString.replace(/\s/g, '').toLowerCase()) !== -1) {
                      filtered.push(plate);
                    }

                    plate.meanings?.forEach(meaning => {
                      // console.log('meaning', meaning);
                      if (meaning['meaning']) {
                        return;
                      }
                      if ( meaning.length > 0) {
                        if (meaning?.toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
                          filtered.push(plate);
                        }
                      }
                    });
                  });

                  return [...new Set(filtered)];
                }
              )
            );
        })
      )
      .subscribe()
    );
  }

  addPlatesToTheDB(plates: Array<CustomerPlate>) {
    let counter = 0;

    plates.map((plate: CustomerPlate) => {
      if (counter < 1458) {
        this.firebaseNumberPlatesService.create(plate);
      }
      counter ++;
    });
  }

  // getAllPlates() {
  //   this.subscriptions.push(
  //     this.firebaseNumberPlatesService
  //     .getAll()
  //     .snapshotChanges()
  //     .pipe(
  //       map(changes =>
  //         changes.map(c =>
  //           ({ id: c.payload.doc.id, ...c.payload.doc.data() })
  //         )
  //       ),
  //       tap((data: any) => {
  //         this.numberPlates$ = of(data);
  //         this.isDataLoaded = true;
  //         this.filter$ = this.filter.valueChanges.pipe(startWith(''));

  //         this.filteredNumberPlates$ =
  //           combineLatest([this.numberPlates$, this.filter$])
  //           .pipe(
  //             map(
  //               ([numberplates, filterString]) =>
  //                 numberplates.filter((plate: CustomerPlate) => {
  //                   return plate.meanings.toLowerCase().indexOf(filterString.toLowerCase()) !== -1 ||
  //                   plate.plateCharacters.replace(/\s/g, '').toLowerCase().indexOf(filterString.replace(/\s/g, '').toLowerCase()) !== -1;
  //                 })
  //               )
  //           );
  //       })
  //     )
  //     .subscribe()
  //   );
  // }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
