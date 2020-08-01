import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorProfileBuilderPageRoutingModule } from './doctor-profile-builder-routing.module';

import { DoctorProfileBuilderPage } from './doctor-profile-builder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorProfileBuilderPageRoutingModule
  ],
  declarations: [DoctorProfileBuilderPage]
})
export class DoctorProfileBuilderPageModule {}
