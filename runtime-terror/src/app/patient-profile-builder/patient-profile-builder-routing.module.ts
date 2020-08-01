import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientProfileBuilderPage } from './patient-profile-builder.page';

const routes: Routes = [
  {
    path: '',
    component: PatientProfileBuilderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientProfileBuilderPageRoutingModule {}
