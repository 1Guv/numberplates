import { Component, Input, OnInit } from '@angular/core';
import { Plate } from '../../_models/plate.model';

@Component({
  selector: 'app-plate-card',
  templateUrl: './plate-card.component.html',
  styleUrls: ['./plate-card.component.scss']
})
export class PlateCardComponent implements OnInit {

  // @Input() plates: Array<Plate>;
  @Input() title: string;

  @Input() profilePic: string;
  @Input() plateCreated: string;
  @Input() plateCategory: string;
  @Input() plateId: string;
  @Input() askingPrice: string;
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

  constructor() { }

  ngOnInit() {
  }

  soldOrNot(soldOrNot: string) {
    if (soldOrNot === 'Yes') {
      return 'Yes'
    } else {
      return 'No'
    }
  }

  findCategory(plateUrl: string) {
    if (plateUrl.match(this.muslimRegex)) {
      this.category = 'MUSLIM';
      this.imageUrl = './assets/flags/flag_of_pakistan.svg';
    };

    if (plateUrl.match(this.sikhRegex)) {
      this.category = 'SIKH';
      this.imageUrl = './assets/flags/khanda.svg';
    };

    if (plateUrl.match(this.britishRegex)) {
      this.category = 'BRITISH';
      this.imageUrl = './assets/flags/british.svg';
    };

    if (plateUrl.match(this.hinduRegex)) {
      this.category = 'HINDU';
      this.imageUrl = './assets/flags/india.svg';
    };

    if (plateUrl === null || plateUrl === '') {
      this.category = 'OTHER';
      this.imageUrl = '';
    };
    return this.imageUrl;
  }

}
