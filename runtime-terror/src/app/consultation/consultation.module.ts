import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultationPageRoutingModule } from './consultation-routing.module';

import { ConsultationPage } from './consultation.page';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  imports: [
    WebcamModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultationPageRoutingModule
  ],
  declarations: [ConsultationPage]
})
export class ConsultationPageModule {}
