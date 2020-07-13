import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-card',
  template: `
    <mat-card class="my-3 mx-auto">

      <mat-card-subtitle class="text-left">
          <h5>{{ subTitle }}</h5>
      </mat-card-subtitle>

      <mat-card-title class="text-left">
          <h3>{{ title }}</h3>
      </mat-card-title>  

      <ng-content>  
      </ng-content>

    </mat-card>
  `,
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
