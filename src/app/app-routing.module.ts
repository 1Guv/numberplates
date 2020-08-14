import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-listing', loadChildren: './create-listing/create-listing.module#CreateListingModule' },
  { path: 'create-listing-two', loadChildren: './create-listing/create-listing.module#CreateListingModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
