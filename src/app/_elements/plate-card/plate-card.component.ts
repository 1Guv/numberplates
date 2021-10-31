import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Plate } from '../../_models/plate.model';
import { MessageSellerDialogComponent } from '../message-seller-dialog/message-seller-dialog.component';

@Component({
  selector: 'app-plate-card',
  templateUrl: './plate-card.component.html',
  styleUrls: ['./plate-card.component.scss']
})
export class PlateCardComponent implements OnInit {

  // @Input() plates: Array<Plate>;
  @Input() title: string;

  @Input() profilePic: string;
  @Input() initials: string;
  @Input() profilePicInitials: boolean;
  @Input() plateCreated: string;
  @Input() plateCategory: string;
  @Input() plateId: string;
  @Input() askingPrice: string;
  @Input() plateNegotiable: boolean;
  @Input() plateBestOffer: boolean;
  @Input() offersOver: boolean;
  @Input() orNearestOffer: boolean;
  @Input() meaning: string;
  @Input() pageViews: string;
  @Input() sellerContacted: string;
  @Input() emailToFriend: string;
  @Input() sold: string;

  muslimRegex = /MUSLIM/g;
  sikhRegex = /SIKH/g;
  hinduRegex = /HINDU/g;
  britishRegex = /BRITISH/g;
  category: string;
  imageUrl: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  soldOrNot(soldOrNot: string) {
    if (soldOrNot === 'Yes') {
      return 'Yes';
    } else {
      return 'No';
    }
  }

  findCategory(plateUrl: string) {
    if (plateUrl.match(this.muslimRegex)) {
      this.category = 'MUSLIM';
      this.imageUrl = './assets/flags/flag_of_pakistan.svg';
    }

    if (plateUrl.match(this.sikhRegex)) {
      this.category = 'SIKH';
      this.imageUrl = './assets/flags/khanda.svg';
    }

    if (plateUrl.match(this.britishRegex)) {
      this.category = 'BRITISH';
      this.imageUrl = './assets/flags/british.svg';
    }

    if (plateUrl.match(this.hinduRegex)) {
      this.category = 'HINDU';
      this.imageUrl = './assets/flags/india.svg';
    }

    if (plateUrl === null || plateUrl === '') {
      this.category = 'OTHER';
      this.imageUrl = '';
    }
    return this.imageUrl;
  }

  messageSeller(plateId: string, pageViews: string, meaning: string, askingPrice: string, initials: string): void {
    const dialogRef = this.dialog.open(MessageSellerDialogComponent, {
      width: '80%',
      data: {
        plateId,
        pageViews,
        meaning,
        askingPrice,
        initials
      }
    });
  }

}
