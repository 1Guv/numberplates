import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateListingRoutingModule } from './create-listing-routing';



@NgModule({
  declarations: [CreateListingComponent],
  imports: [ CommonModule, CreateListingRoutingModule],
  exports: [CreateListingComponent]
})
export class CreateListingModule { }
