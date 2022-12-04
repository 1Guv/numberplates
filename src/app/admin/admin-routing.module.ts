import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlateUploadComponent } from './components/plate-upload/plate-upload.component';


const routes: Routes = [
    { path: 'upload', component: PlateUploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
