import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPlateSearchComponent } from './number-plate-search/number-plate-search.component';
import { SearchRoutingModule } from './search-routing';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageSellerDialogComponent } from '../_elements/message-seller-dialog/message-seller-dialog.component';


@NgModule({
  declarations: [
    NumberPlateSearchComponent,
    MessageSellerDialogComponent
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
