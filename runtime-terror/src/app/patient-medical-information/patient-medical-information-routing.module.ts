import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientMedicalInformationPage } from './patient-medical-information.page';

const routes: Routes = [
  {
    path: '',
    component: PatientMedicalInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientMedicalInformationPageRoutingModule {}
