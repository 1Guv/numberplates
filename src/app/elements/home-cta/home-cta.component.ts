import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cta',
  templateUrl: './home-cta.component.html',
  styleUrls: ['./home-cta.component.scss']
})
export class HomeCtaComponent implements OnInit {

  title: string = 'Numberplates.io'
  subTitle: string = 'We want all plates online'
  subMessage: string = 'Our aim is to get all the number plates in the UK online so anyone contact the lister and make a direct offer.'

  constructor() { }

  ngOnInit() {
  }

}
