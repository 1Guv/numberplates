import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateListingRoutingModule } from './create-listing-routing';
import { LargePlateDisplayInputComponent } from '../_elements/large-plate-display-input/large-plate-display-input.component';
import { MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CreateListingFormComponent } from '../_forms/create-listing-form/create-listing-form.component';



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
    FormsModule
  ],
  exports: [CreateListingComponent]
})
export class CreateListingModule { }
