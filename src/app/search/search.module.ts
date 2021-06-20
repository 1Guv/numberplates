import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPlateSearchComponent } from './number-plate-search/number-plate-search.component';
import { SearchRoutingModule } from './search-routing';

@NgModule({
  declarations: [NumberPlateSearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
