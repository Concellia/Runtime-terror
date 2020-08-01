import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientLandingPagePage } from './patient-landing-page.page';

const routes: Routes = [
  {
    path: '',
    component: PatientLandingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientLandingPagePageRoutingModule {}
