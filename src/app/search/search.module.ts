import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPlateSearchComponent } from './number-plate-search/number-plate-search.component';
import { SearchRoutingModule } from './search-routing';
import { MatBadgeModule, MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule, MatSlideToggleModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageSellerDialogComponent } from '../_elements/message-seller-dialog/message-seller-dialog.component';
import { FormCardComponent } from '../_elements/form-card/form-card.component';


@NgModule({
  declarations: [
    NumberPlateSearchComponent,
    MessageSellerDialogComponent,
    FormCardComponent
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
    MatSlideToggleModule,
    ScrollingModule,
    MatDialogModule,
    MatChipsModule
  ],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [MessageSellerDialogComponent]
})
export class SearchModule { }
