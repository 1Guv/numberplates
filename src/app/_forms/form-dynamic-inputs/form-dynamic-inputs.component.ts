import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { CreateListingTwoComponent } from 'src/app/create-listing/create-listing-two/create-listing-two.component';
import { CreateListingComponent } from 'src/app/create-listing/create-listing/create-listing.component';

@Component({
  selector: 'app-form-dynamic-inputs',
  templateUrl: './form-dynamic-inputs.component.html',
  styleUrls: ['./form-dynamic-inputs.component.scss']
})
export class FormDynamicInputsComponent implements OnInit {

  // TODO: need to handle required and non required fields via the content api

  @Input() fG: FormGroup;
  @Input() fGN: string;
  @Input() fields: any;
  @Input() select: any;
  @Input() selectTitle: string;

  constructor(
    // private parentForm: CreateListingComponent,
    private parentForm: CreateListingTwoComponent,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.fG = this.parentForm.plateForm;
    const groupToAdd = {};

    this.fields.forEach(element => {
      if (element.required) {
        groupToAdd[element.name] = new FormControl('', [Validators.required]);
      } else {
        groupToAdd[element.name] = new FormControl('');
      }

    });

    this.fG.addControl(this.fGN, new FormGroup(groupToAdd));

  }

  onSubmit() {
    console.log('CreateListingFormComponent -> createListingOneForm', this.fG.value);
  }


}

// TODO: maybe add Validators.maxLength(10), Validators.email, Validators.pattern()
