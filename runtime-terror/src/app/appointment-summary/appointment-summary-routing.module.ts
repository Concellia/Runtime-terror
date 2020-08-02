import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentSummaryPage } from './appointment-summary.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentSummaryPageRoutingModule {}
