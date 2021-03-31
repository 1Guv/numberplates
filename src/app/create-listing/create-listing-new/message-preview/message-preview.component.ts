import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-preview',
  template: `
    <div class="my-2"><b>{{plate}}</b> - You have a new enquiry</div>

    <div class="d-flex flex-row">
      <mat-form-field class="w-50 mr-1" appearance="fill">
        <mat-label>Name</mat-label>
        <input type="text" matInput>
      </mat-form-field>
      <mat-form-field class="w-50" appearance="fill">
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

    <!-- <h6>{{lCName}}</h6>
    <h6><a href="mailto: {{lCEmail}}">{{lCEmail}}</a> </h6>
    <h6>{{lCNumber}} </h6> -->

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
