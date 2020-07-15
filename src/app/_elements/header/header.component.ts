import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/_services/content.service';
import { Header } from 'src/app/_models/content';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: Header;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContent()
      .subscribe(data => {
        this.header = data.header;
        // console.log("HeaderComponent -> ngOnInit -> this.content", this.header);
      })
  }

}
