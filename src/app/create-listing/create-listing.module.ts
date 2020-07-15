import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateListingRoutingModule } from './create-listing-routing';
import { LargePlateDisplayInputComponent } from '../_elements/large-plate-display-input/large-plate-display-input.component';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateListingFormComponent } from '../_forms/create-listing-form/create-listing-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { FormCardComponent } from '../_elements/form-card/form-card.component';



@NgModule({
  declarations: [
    CreateListingComponent, 
    LargePlateDisplayInputComponent,
    CreateListingFormComponent,
    FormCardComponent
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
    MatSelectModule
  ],
  exports: [CreateListingComponent]
})
export class CreateListingModule { }
