import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { Section } from '../models/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  howItWorks: Array<Section>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContent()
      .subscribe(data => {
        this.howItWorks = data.homeCTA.howItWorks;
      })
  }

}
