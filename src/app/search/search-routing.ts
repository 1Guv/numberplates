import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumberPlateSearchComponent } from './number-plate-search/number-plate-search.component';


const routes: Routes = [
  { path: '', component: NumberPlateSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
