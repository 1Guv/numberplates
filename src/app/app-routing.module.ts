import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-listing', loadChildren: './create-listing/create-listing.module#CreateListingModule' },
  { path: 'create-listing-two', loadChildren: './create-listing/create-listing.module#CreateListingModule' },
  { path: 'create-listing-new', loadChildren: './create-listing/create-listing.module#CreateListingModule' },
  { path: 'number-plate-search', loadChildren: './search/search.module#SearchModule' },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
