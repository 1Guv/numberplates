import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormGroupDirective, FormControl, ControlContainer } from '@angular/forms';
import { CreateListingComponent } from 'src/app/create-listing/create-listing/create-listing.component';

@Component({
  selector: 'app-create-listing-form',
  templateUrl: './create-listing-form.component.html',
  styleUrls: ['./create-listing-form.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: CreateListingComponent}]
})
export class CreateListingFormComponent implements OnInit {

  createListingOneForm;

  constructor(private parentForm: CreateListingComponent) { }

  ngOnInit() {
    this.createListingOneForm = this.parentForm.plateForm;

    this.createListingOneForm.addControl('one', new FormGroup({
      meaningOne: new FormControl('', [Validators.required]),
      meaningTwo: new FormControl(''),
      meaningThree: new FormControl(''),
    }));
  }

  onSubmit() {
    console.log("CreateListingFormComponent -> createListingOneForm", this.createListingOneForm.value);
  }

}
