import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Footer } from 'src/app/_models/content';
import { ContentService } from 'src/app/_services/content.service';
import { map, tap, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  // footer: Footer
  footer$: Observable<Footer>

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.footer$ = this.contentService.content$.pipe(map(content => content.footer));
  }

}
