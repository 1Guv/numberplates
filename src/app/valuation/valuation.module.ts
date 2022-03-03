import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuationDialogComponent } from './components/valuation-dialog/valuation-dialog.component';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatStepperModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '../_pipes/decimal.pipe';
import { UppercaseDirective } from '../_directives/uppercase.directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ShareButtonComponent } from '../_elements/share-button/share-button.component';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    ValuationDialogComponent,
    DecimalPipe,
    UppercaseDirective,
    ShareButtonComponent
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
    MatSlideToggleModule,
    AngularFontAwesomeModule,
    MatChipsModule,
    MatExpansionModule
  ]
})
export class ValuationModule { }
