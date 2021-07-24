import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPlateSearchComponent } from './number-plate-search/number-plate-search.component';
import { SearchRoutingModule } from './search-routing';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule } from '@angular/material';
import { PlateCardComponent } from '../_elements/plate-card/plate-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NumberPlateSearchComponent,
    // PlateCardComponent
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
    SharedModule
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchModule { }
