import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreateListingTwoComponent } from 'src/app/create-listing/create-listing-two/create-listing-two.component';

@Component({
  selector: 'app-form-dynamic-datepicker',
  templateUrl: './form-dynamic-datepicker.component.html',
  styleUrls: ['./form-dynamic-datepicker.component.scss']
})
export class FormDynamicDatepickerComponent implements OnInit {

  @Input() fG: FormGroup;
  @Input() fGN: string;
  @Input() fCN: any;
  @Input() selectTitle: string;
  date: any;

  selectedElement: string = '';
  selectedElementControl = new FormControl(this.selectedElement, [Validators.required]);

  constructor(
    private parentForm: CreateListingTwoComponent,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.fG = this.parentForm.plateForm;
    let groupToAdd = {};
    groupToAdd[this.fCN] = this.selectedElementControl;
    this.fG.addControl(this.fGN, new FormGroup(groupToAdd));
  }

  dateChangeHandler(date: Date) {
    this.fG.get(this.fGN).get(this.fCN).setValue(date);
  }

}
