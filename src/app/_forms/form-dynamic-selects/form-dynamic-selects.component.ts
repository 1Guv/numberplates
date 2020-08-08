import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CreateListingComponent } from 'src/app/create-listing/create-listing/create-listing.component';

@Component({
  selector: 'app-form-dynamic-selects',
  templateUrl: './form-dynamic-selects.component.html',
  styleUrls: ['./form-dynamic-selects.component.scss']
})
export class FormDynamicSelectsComponent implements OnInit {

  @Input() fG: FormGroup;
  @Input() fGN: string;
  @Input() fCN: any;
  @Input() select: any;
  @Input() selectTitle: string;

  selectedElement: string = '';
  selectedElementControl = new FormControl(this.selectedElement, [Validators.required]);

  constructor(
    private parentForm: CreateListingComponent,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.fG = this.parentForm.plateForm;
    let groupToAdd = {};
    groupToAdd[this.fCN] = this.selectedElementControl;
    this.fG.addControl(this.fGN, new FormGroup(groupToAdd));
  }


}
