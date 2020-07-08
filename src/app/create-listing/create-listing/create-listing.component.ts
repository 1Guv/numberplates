import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.scss']
})
export class CreateListingComponent implements OnInit {

  numberPlate: string;
  placeholderPlate: string = 'SE11 NOW'
  value: string;

  constructor() { }

  ngOnInit() {
  }

}
