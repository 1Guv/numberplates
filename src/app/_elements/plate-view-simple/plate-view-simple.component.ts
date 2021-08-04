import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
