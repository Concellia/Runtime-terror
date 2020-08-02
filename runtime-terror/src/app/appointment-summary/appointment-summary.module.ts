import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentSummaryPageRoutingModule } from './appointment-summary-routing.module';

import { AppointmentSummaryPage } from './appointment-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentSummaryPageRoutingModule
  ],
  declarations: [AppointmentSummaryPage]
})
export class AppointmentSummaryPageModule {}
