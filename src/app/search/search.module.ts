import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPlateSearchComponent } from './number-plate-search/number-plate-search.component';
import { SearchRoutingModule } from './search-routing';
import { MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [NumberPlateSearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class SearchModule { }
