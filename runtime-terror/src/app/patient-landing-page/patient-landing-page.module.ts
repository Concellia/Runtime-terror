import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientLandingPagePageRoutingModule } from './patient-landing-page-routing.module';

import { PatientLandingPagePage } from './patient-landing-page.page';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    NgCalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PatientLandingPagePageRoutingModule
  ],
  declarations: [PatientLandingPagePage]
})
export class PatientLandingPagePageModule {}

