import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPlateSearchComponent } from './number-plate-search/number-plate-search.component';
import { SearchRoutingModule } from './search-routing';
import { MatBadgeModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule, MatSlideToggleModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NumberPlateSearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatButtonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { }
