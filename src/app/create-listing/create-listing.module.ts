import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateListingRoutingModule } from './create-listing-routing';
import { LargePlateDisplayInputComponent } from '../_elements/large-plate-display-input/large-plate-display-input.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { FormCardComponent } from '../_elements/form-card/form-card.component';
import { FormDynamicInputsComponent } from '../_forms/form-dynamic-inputs/form-dynamic-inputs.component';
import { FormDynamicSelectsComponent } from '../_forms/form-dynamic-selects/form-dynamic-selects.component';
import { FormDynamicCheckboxesComponent } from '../_forms/form-dynamic-checkboxes/form-dynamic-checkboxes.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateListingComponent, 
    LargePlateDisplayInputComponent,
    FormCardComponent,
    FormDynamicInputsComponent,
    FormDynamicSelectsComponent,
    FormDynamicCheckboxesComponent,
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
    SharedModule
  ],
  exports: [CreateListingComponent]
})
export class CreateListingModule { }
