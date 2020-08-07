import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContentComponent } from '../_elements/section-content/section-content.component';
import { RouterModule } from '@angular/router';
import { BootstrapCarouselComponent } from '../_elements/bootstrap-carousel/bootstrap-carousel.component';



@NgModule({
  declarations: [SectionContentComponent, BootstrapCarouselComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SectionContentComponent, BootstrapCarouselComponent]
})
export class SharedModule { }
