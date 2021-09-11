import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuationDialogComponent } from './components/valuation-dialog/valuation-dialog.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ValuationDialogComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ValuationModule { }
