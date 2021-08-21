import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-message-seller-dialog',
  templateUrl: './message-seller-dialog.component.html',
  styleUrls: ['./message-seller-dialog.component.scss']
})
export class MessageSellerDialogComponent implements OnInit {

  subTitle: string;
  footerMessage: string;
  badgePrice: string;
  currentViews: string;
  messageSellerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MessageSellerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.subTitle = `Message to ${this.data.initials.toUpperCase()}`;
    this.footerMessage = `Meanings: ${this.data.meaning}`;
    this.badgePrice = `£${this.data.askingPrice}`;
    this.currentViews = `${this.data.pageViews} views`;
    this.messageSellerForm = this.fb.group({
      plateId: [this.data.plateId],
      contactName: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      contactEmail: ['', [Validators.compose([Validators.required, Validators.email])]],
      contactMessage: [`I want to buy ${this.data.plateId.toUpperCase()}, is it still available?`, [Validators.required]],
    })
  }

  sendContactEnquiry() {
    // Need to send enquiry via email to seller here
    console.log(this.messageSellerForm.value);
    this.dialogRef.close();
  }
}
