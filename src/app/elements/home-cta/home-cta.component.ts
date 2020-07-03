import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { HomeCTA, CTAButtons } from 'src/app/models/content';

@Component({
  selector: 'app-home-cta',
  templateUrl: './home-cta.component.html',
  styleUrls: ['./home-cta.component.scss']
})
export class HomeCtaComponent implements OnInit {

  homeCTA: HomeCTA;
  listingButton: CTAButtons;
  valuationButton: CTAButtons;
  searchButton: CTAButtons;

  // title: string = 'Numberplates.io'
  // subTitle: string = 'We want all plates online by 2050.'
  // subMessage: string = 'Our aim is to get all the number plates in the UK online so anyone contact the seller and make a direct offer.'
  // premiumMessage: string = 'We also have a PREMIUM Listing option where you can sell your plate fast.';
  // howItWorks: string = 'To see how everything works please click here for more information.';

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
