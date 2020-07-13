import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormControl, ControlContainer, FormBuilder } from '@angular/forms';
import { CreateListingComponent } from 'src/app/create-listing/create-listing/create-listing.component';

@Component({
  selector: 'app-create-listing-form',
  templateUrl: './create-listing-form.component.html',
  styleUrls: ['./create-listing-form.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: CreateListingComponent}]
})
export class CreateListingFormComponent implements OnInit {

  @Input() fG: FormGroup;
  @Input() fGN: string;
  @Input() fields: any;

  constructor(
    private parentForm: CreateListingComponent,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.fG = this.parentForm.plateForm;
    let groupToAdd = {};

    this.fields.forEach(element => {
      groupToAdd[element.name] = new FormControl('', [Validators.required]);
    });

    this.fG.addControl(this.fGN, new FormGroup(groupToAdd));

  }

  onSubmit() {
    console.log("CreateListingFormComponent -> createListingOneForm", this.fG.value);
  }

}
