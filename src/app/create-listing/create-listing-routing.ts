import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateListingComponent } from './create-listing/create-listing.component';


const routes: Routes = [
  { path: '', component: CreateListingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateListingRoutingModule { }