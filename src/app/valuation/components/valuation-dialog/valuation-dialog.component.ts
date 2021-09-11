import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valuation-dialog',
  templateUrl: './valuation-dialog.component.html',
  styleUrls: ['./valuation-dialog.component.scss']
})
export class ValuationDialogComponent implements OnInit {

  isLinear = false;
  stepZeroForm: FormGroup;
  stepOneForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    this.stepZeroForm = this.fb.group({
      plate: ['', [Validators.required]],
      plateYear: ['', [Validators.required]]
    })

    this.stepOneForm = this.fb.group({
      meaning: ['', [Validators.required]]
    })
  }

}
