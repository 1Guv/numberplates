import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Section } from 'src/app/_models/content';
import { ContentService } from 'src/app/_services/content.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  howItWorks$: Observable<Array<Section>>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.howItWorks$ = this.contentService.content$.pipe(map(content => content.homeCTA.howItWorks));
  }

}
