import { Component, OnInit } from '@angular/core';
import { ContentService } from '../_services/content.service';
import { Section } from '../_models/content';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // howItWorks: Array<Section>;
  howItWorks$: Observable<Array<Section>>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.howItWorks$ = this.contentService.content$.pipe(map(content => content.homeCTA.howItWorks));
  }

}
