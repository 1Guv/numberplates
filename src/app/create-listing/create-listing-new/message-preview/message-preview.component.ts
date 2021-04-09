import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-preview',
  template: `

    <span class="plate-css text-uppercase mat-elevation-z4">
      {{plate}}
    </span>

    <div class="my-3">Hi <b>{{lCName}}</b> you have a new enquiry for the <b>{{plate}}</b> plate</div>

    <div class="d-flex flex-column flex-lg-row">
      <mat-form-field class="col px-0 mr-lg-1" appearance="fill">
        <mat-label>Name</mat-label>
        <input type="text" matInput>
      </mat-form-field>
      <mat-form-field class="col px-0" appearance="fill">
        <mat-label>Number</mat-label>
        <input type="text" matInput>
      </mat-form-field>
    </div>

    <mat-form-field class="w-100" appearance="fill">
      <mat-label>Email</mat-label>
      <input type="text" matInput>
    </mat-form-field>

    <mat-form-field class="w-100" appearance="fill">
      <mat-label>Message</mat-label>
      <textarea matInput>Is this plate {{plate}} still available?</textarea>
    </mat-form-field>

    <div class="mb-3 message">This message will be sent to <b>{{lCEmail}}</b> <span *ngIf="lCNumber"> and will contain the following number <b>{{lCNumber}}</b></span></div>

    <div class="d-flex flex-row-reverse">
      <button mat-raised-button class="my-1 col col-lg-1">Send</button>
    </div>
  `,
  styleUrls: ['./message-preview.component.scss']
})
export class MessagePreviewComponent implements OnInit {

  @Input() plate: string;
  @Input() askingPrice: string;
  @Input() lCName: string;
  @Input() lCNumber: string;
  @Input() lCEmail: string;

  constructor() { }

  ngOnInit() {
  }

}
