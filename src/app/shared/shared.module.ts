import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContentComponent } from '../_elements/section-content/section-content.component';
import { RouterModule } from '@angular/router';
import { BootstrapCarouselComponent } from '../_elements/bootstrap-carousel/bootstrap-carousel.component';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatToolbarModule, MatCardModule, MatBadgeModule } from '@angular/material';

@NgModule({
  declarations: [SectionContentComponent, BootstrapCarouselComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
  ],
  exports: [SectionContentComponent, BootstrapCarouselComponent]
})
export class SharedModule { }
