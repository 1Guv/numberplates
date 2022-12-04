import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-listing', loadChildren: () => import('./create-listing/create-listing.module').then(m => m.CreateListingModule) },
  { path: 'create-listing-two', loadChildren: () => import('./create-listing/create-listing.module').then(m => m.CreateListingModule) },
  { path: 'create-listing-new', loadChildren: () => import('./create-listing/create-listing.module').then(m => m.CreateListingModule) },
  { path: 'number-plate-search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
