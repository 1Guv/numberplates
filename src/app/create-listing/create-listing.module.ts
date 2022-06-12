import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateListingRoutingModule } from './create-listing-routing';
import { LargePlateDisplayInputComponent } from '../_elements/large-plate-display-input/large-plate-display-input.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { FormDynamicInputsComponent } from '../_forms/form-dynamic-inputs/form-dynamic-inputs.component';
import { FormDynamicSelectsComponent } from '../_forms/form-dynamic-selects/form-dynamic-selects.component';
import { FormDynamicCheckboxesComponent } from '../_forms/form-dynamic-checkboxes/form-dynamic-checkboxes.component';
import { SharedModule } from '../shared/shared.module';
import { CreateListingTwoComponent } from './create-listing-two/create-listing-two.component';
import { FormDynamicDatepickerComponent } from '../_forms/form-dynamic-datepicker/form-dynamic-datepicker.component';
import { CreateListingNewComponent } from './create-listing-new/create-listing-new.component';
import { ListingPreviewComponent } from './create-listing-new/listing-preview/listing-preview.component';
import { MessagePreviewComponent } from './create-listing-new/message-preview/message-preview.component';
import { LettersOnlyDirective } from '../_directives/letters-only.directive';
import { NumbersOnlyDirective } from '../_directives/numbers-only.directive';
import { EmailValidationDirective } from '../_directives/email-validation.directive';

@NgModule({
  declarations: [
    CreateListingComponent,
    LargePlateDisplayInputComponent,
    FormDynamicInputsComponent,
    FormDynamicSelectsComponent,
    FormDynamicCheckboxesComponent,
    FormDynamicDatepickerComponent,
    CreateListingTwoComponent,
    CreateListingNewComponent,
    ListingPreviewComponent,
    MessagePreviewComponent,
    LettersOnlyDirective,
    NumbersOnlyDirective,
    EmailValidationDirective
  ],
  imports: [
    CommonModule,
    CreateListingRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatStepperModule,
    MatSelectModule,
    SharedModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  exports: [CreateListingComponent]
})
export class CreateListingModule { }
