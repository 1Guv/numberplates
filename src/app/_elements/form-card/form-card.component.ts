import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-card',
  template: `
    <mat-card [ngClass]="bgColour" class="my-3 mx-auto">

      <mat-card-subtitle class="text-left">
          <h5>{{ subTitle }}</h5>
      </mat-card-subtitle>

      <mat-card-title class="text-left">
          <h3>{{ title }}</h3>
      </mat-card-title>  

      <ng-content>  
      </ng-content>

      <mat-card-footer class="text-left">
        <h6>{{ footer }}</h6>
      </mat-card-footer>

    </mat-card>
  `,
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() footer: string;
  @Input() bgColour: string;

  constructor() { }

  ngOnInit() {
  }

}
