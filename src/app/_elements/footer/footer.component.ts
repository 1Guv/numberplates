import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Footer } from 'src/app/_models/content';
import { ContentService } from 'src/app/_services/content.service';
import { map, tap, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ValuationDialogComponent } from 'src/app/valuation/components/valuation-dialog/valuation-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  // footer: Footer
  footer$: Observable<Footer>

  constructor(
    private contentService: ContentService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.footer$ = this.contentService.content$.pipe(map(content => content.footer));
  }

  onValuation() {
    this.dialog.open(ValuationDialogComponent,
      {
        width: '95vw',
        height: '90vh'
      });
  }

}
