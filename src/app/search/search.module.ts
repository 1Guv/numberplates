import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPlateSearchComponent } from './number-plate-search/number-plate-search.component';
import { SearchRoutingModule } from './search-routing';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { PlateCardComponent } from '../_elements/plate-card/plate-card.component';

@NgModule({
  declarations: [
    NumberPlateSearchComponent,
    PlateCardComponent
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
    MatChipsModule,
    MatCardModule
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { }
