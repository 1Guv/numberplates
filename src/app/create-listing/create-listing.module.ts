import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateListingRoutingModule } from './create-listing-routing';
import { LargePlateDisplayInputComponent } from '../_elements/large-plate-display-input/large-plate-display-input.component';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateListingFormComponent } from '../_forms/create-listing-form/create-listing-form.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    CreateListingComponent, 
    LargePlateDisplayInputComponent,
    CreateListingFormComponent
  ],
  imports: [ 
    CommonModule, 
    CreateListingRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  exports: [CreateListingComponent]
})
export class CreateListingModule { }
