import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/_services/content.service';
import { Header } from 'src/app/_models/content';
import { Observable } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ValuationDialogComponent } from 'src/app/valuation/components/valuation-dialog/valuation-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // header: Header;
  header$: Observable<Header>;

  constructor(
    private contentService: ContentService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.header$ = this.contentService.content$.pipe(map(content => content.header));
  }

  onValuation() {
    this.dialog.open(ValuationDialogComponent);
  }

}
