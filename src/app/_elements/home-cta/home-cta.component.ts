import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContentService } from 'src/app/_services/content.service';
import { HomeCTA, CTAButtons } from 'src/app/_models/content';

@Component({
  selector: 'app-home-cta',
  templateUrl: './home-cta.component.html',
  styleUrls: ['./home-cta.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeCtaComponent implements OnInit {

  homeCTA: HomeCTA;
  listingButton: CTAButtons;
  valuationButton: CTAButtons;
  searchButton: CTAButtons;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContent()
      .subscribe(data => {
        this.homeCTA = data.homeCTA;
        this.listingButton = data.homeCTA.createListingButton;
        this.valuationButton = data.homeCTA.valuationButton;
        this.searchButton = data.homeCTA.searchButton;
      })
  }

  

}
