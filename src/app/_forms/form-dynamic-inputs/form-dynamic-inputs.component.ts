import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreateListingComponent } from 'src/app/create-listing/create-listing/create-listing.component';

@Component({
  selector: 'app-form-dynamic-inputs',
  templateUrl: './form-dynamic-inputs.component.html',
  styleUrls: ['./form-dynamic-inputs.component.scss']
})
export class FormDynamicInputsComponent implements OnInit {

  @Input() fG: FormGroup;
  @Input() fGN: string;
  @Input() fields: any;
  @Input() select: any;
  @Input() selectTitle: string;

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
