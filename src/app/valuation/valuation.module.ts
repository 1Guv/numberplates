import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuationDialogComponent } from './components/valuation-dialog/valuation-dialog.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatStepperModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '../_pipes/decimal.pipe';
import { UppercaseDirective } from '../_directives/uppercase.directive';



@NgModule({
  declarations: [
    ValuationDialogComponent,
    DecimalPipe,
    UppercaseDirective
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatSlideToggleModule
  ]
})
export class ValuationModule { }
