import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorProfileBuilderPage } from './doctor-profile-builder.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorProfileBuilderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorProfileBuilderPageRoutingModule {}
