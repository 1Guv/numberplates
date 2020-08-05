import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContentComponent } from '../_elements/section-content/section-content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SectionContentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SectionContentComponent]
})
export class SharedModule { }
