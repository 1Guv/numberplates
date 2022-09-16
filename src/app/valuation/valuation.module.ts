import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuationDialogComponent } from './components/valuation-dialog/valuation-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '../_pipes/decimal.pipe';
import { UppercaseDirective } from '../_directives/uppercase.directive';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
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
    // AngularFontAwesomeModule,
    MatChipsModule,
    MatExpansionModule
  ]
})
export class ValuationModule { }
