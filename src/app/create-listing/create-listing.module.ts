import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateListingRoutingModule } from './create-listing-routing';
import { LargePlateDisplayInputComponent } from '../_elements/large-plate-display-input/large-plate-display-input.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule, MatSelectModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MAT_DATE_LOCALE, MatBadgeModule, MatButtonModule, MatChipsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { FormCardComponent } from '../_elements/form-card/form-card.component';
import { FormDynamicInputsComponent } from '../_forms/form-dynamic-inputs/form-dynamic-inputs.component';
import { FormDynamicSelectsComponent } from '../_forms/form-dynamic-selects/form-dynamic-selects.component';
import { FormDynamicCheckboxesComponent } from '../_forms/form-dynamic-checkboxes/form-dynamic-checkboxes.component';
import { SharedModule } from '../shared/shared.module';
import { CreateListingTwoComponent } from './create-listing-two/create-listing-two.component';
import { FormDynamicDatepickerComponent } from '../_forms/form-dynamic-datepicker/form-dynamic-datepicker.component';
import { CreateListingNewComponent } from './create-listing-new/create-listing-new.component';
import { ListingPreviewComponent } from './create-listing-new/listing-preview/listing-preview.component';
import { PlateCardComponent } from '../_elements/plate-card/plate-card.component';
import { MessagePreviewComponent } from './create-listing-new/message-preview/message-preview.component';

@NgModule({
  declarations: [
    CreateListingComponent,
    LargePlateDisplayInputComponent,
    FormCardComponent,
    FormDynamicInputsComponent,
    FormDynamicSelectsComponent,
    FormDynamicCheckboxesComponent,
    FormDynamicDatepickerComponent,
    CreateListingTwoComponent,
    CreateListingNewComponent,
    ListingPreviewComponent,
    PlateCardComponent,
    MessagePreviewComponent
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
    MatChipsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  exports: [CreateListingComponent]
})
export class CreateListingModule { }
