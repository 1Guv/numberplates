import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreateListingTwoComponent } from 'src/app/create-listing/create-listing-two/create-listing-two.component';
import { formatDate } from '@angular/common';

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
  @Input() readOnly: boolean;
  date: any;

  selectedElement = '';
  selectedElementControl = new FormControl(this.selectedElement, [Validators.required]);

  constructor(
    private parentForm: CreateListingTwoComponent,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.fG = this.parentForm.plateForm;
    const groupToAdd = {};
    groupToAdd[this.fCN] = this.selectedElementControl;
    this.fG.addControl(this.fGN, new FormGroup(groupToAdd));
  }

  dateChangeHandler(date: Date) {
    const formattedDate = formatDate(date, 'dd/MM/yyyy', 'en-GB');
    this.fG.get(this.fGN).get(this.fCN).setValue(formattedDate);
  }

}
