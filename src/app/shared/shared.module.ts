import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContentComponent } from '../_elements/section-content/section-content.component';
import { RouterModule } from '@angular/router';
import { BootstrapCarouselComponent } from '../_elements/bootstrap-carousel/bootstrap-carousel.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
