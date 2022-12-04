import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PlateUploadComponent } from './components/plate-upload/plate-upload.component';



@NgModule({
  declarations: [PlateUploadComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
