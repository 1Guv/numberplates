import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateListingTwoComponent } from './create-listing-two/create-listing-two.component';
import { CreateListingNewComponent } from './create-listing-new/create-listing-new.component';


const routes: Routes = [
  { path: '', component: CreateListingNewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateListingRoutingModule { }