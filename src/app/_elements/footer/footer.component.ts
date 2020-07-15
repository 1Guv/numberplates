import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Footer } from 'src/app/_models/content';
import { ContentService } from 'src/app/_services/content.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  footer: Footer

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContent()
    .subscribe(data => {
      this.footer = data.footer;
      // console.log("FooterComponent -> ngOnInit -> this.footer", this.footer)
    })
  }

}
