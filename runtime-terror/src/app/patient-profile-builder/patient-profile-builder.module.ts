import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientProfileBuilderPageRoutingModule } from './patient-profile-builder-routing.module';

import { PatientProfileBuilderPage } from './patient-profile-builder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientProfileBuilderPageRoutingModule
  ],
  declarations: [PatientProfileBuilderPage]
})
export class PatientProfileBuilderPageModule {}
