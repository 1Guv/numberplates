import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentService } from 'src/app/_services/content.service';
import { WindowsResizeService } from 'src/app/_services/windows-resize.service';


@Component({
  selector: 'app-number-plate-search',
  templateUrl: './number-plate-search.component.html',
  styleUrls: ['./number-plate-search.component.scss']
})
export class NumberPlateSearchComponent implements OnInit, OnDestroy {

  searchContent$: Observable<any>;
  searchPlaceholder = 'Search for name, nickname, surname, anything....';
  opened: boolean;
  currentWidthPx: string;
  currentHeightPx: string;
  resizeSubscription: Subscription;
  subscriptions: Subscription[] = [];

  constructor(
    private contentService: ContentService,
    private windowsResizeService: WindowsResizeService
  ) { }

  ngOnInit() {
    this.getHeaderInfo();

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

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }

}
