import { Component, OnInit, Input } from '@angular/core';
import { CarouselImage } from 'src/app/_models/content';

@Component({
  selector: 'app-bootstrap-carousel',
  templateUrl: './bootstrap-carousel.component.html',
  styleUrls: ['./bootstrap-carousel.component.scss']
})
export class BootstrapCarouselComponent implements OnInit {

  @Input() bgColour: string;
  @Input() containerMaxWidth: string;
  @Input() interval: number;
  @Input() images: Array<CarouselImage>;

  constructor() { }

  ngOnInit() {
  }

}
