import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientMedicalInformationPageRoutingModule } from './patient-medical-information-routing.module';

import { PatientMedicalInformationPage } from './patient-medical-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientMedicalInformationPageRoutingModule
  ],
  declarations: [PatientMedicalInformationPage]
})
export class PatientMedicalInformationPageModule {}
