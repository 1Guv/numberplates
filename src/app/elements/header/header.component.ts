import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Content } from 'src/app/models/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  content: Content;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContent()
      .subscribe(data => {
        this.content = data;
        console.log("HeaderComponent -> ngOnInit -> this.content", this.content);
      })
  }

}
