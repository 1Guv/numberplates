import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageSellerDialogComponent } from '../message-seller-dialog/message-seller-dialog.component';

@Component({
  selector: 'app-plate-view-simple',
  templateUrl: './plate-view-simple.component.html',
  styleUrls: ['./plate-view-simple.component.scss']
})
export class PlateViewSimpleComponent implements OnInit {

  @Input() plateId: string;
  @Input() askingPrice: string;
  @Input() plateNegotiable: boolean;
  @Input() plateBestOffer: boolean;
  @Input() offersOver: boolean;
  @Input() orNearestOffer: boolean;
  @Input() meaning: string;
  @Input() pageViews: string;
  @Input() initials: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  messageSeller(plateId: string, askingPrice: string): void {
    const dialogRef = this.dialog.open(MessageSellerDialogComponent, {
      width: '80%',
      data: {
        plateId: plateId,
        pageViews: this.pageViews,
        meaning: this.meaning,
        askingPrice: askingPrice,
        initials: this.initials
      }
    });
  }

}
