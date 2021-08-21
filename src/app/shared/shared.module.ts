import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContentComponent } from '../_elements/section-content/section-content.component';
import { RouterModule } from '@angular/router';
import { BootstrapCarouselComponent } from '../_elements/bootstrap-carousel/bootstrap-carousel.component';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatToolbarModule, MatCardModule, MatBadgeModule, MatChipsModule } from '@angular/material';
import { PlateCardComponent } from '../_elements/plate-card/plate-card.component';
import { PlateViewSimpleComponent } from '../_elements/plate-view-simple/plate-view-simple.component';
import { FormCardComponent } from '../_elements/form-card/form-card.component';

@NgModule({
  declarations: [
    SectionContentComponent,
    BootstrapCarouselComponent,
    PlateCardComponent,
    PlateViewSimpleComponent,
    FormCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule,
    MatBadgeModule

  ],
  exports: [
    SectionContentComponent,
    BootstrapCarouselComponent,
    PlateCardComponent,
    PlateViewSimpleComponent,
    FormCardComponent
  ]
})
export class SharedModule { }
