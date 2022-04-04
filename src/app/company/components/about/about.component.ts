import { ContentService } from './../../../_services/content.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from 'src/app/_models/content';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about$: Observable<Array<Section>>;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.about$ = this.contentService.about$.pipe(map(content => content.about));
  }

}
