import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/_models/content';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.scss']
})
export class SectionContentComponent implements OnInit {

  @Input() sectionData: Array<Section>;

  constructor() { }

  ngOnInit() {
  }

}
