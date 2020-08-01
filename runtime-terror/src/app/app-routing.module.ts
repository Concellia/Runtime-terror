import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'doctor-register',
    loadChildren: () => import('./doctor-register/doctor-register.module').then( m => m.DoctorRegisterPageModule)
  },
  {
    path: 'patient-register',
    loadChildren: () => import('./patient-register/patient-register.module').then( m => m.PatientRegisterPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'doctor-profile-builder',
    loadChildren: () => import('./doctor-profile-builder/doctor-profile-builder.module').then( m => m.DoctorProfileBuilderPageModule)
  },
  {
    path: 'patient-profile-builder',
    loadChildren: () => import('./patient-profile-builder/patient-profile-builder.module').then( m => m.PatientProfileBuilderPageModule)
  },
  {
    path: 'patient-landing-page',
    loadChildren: () => import('./patient-landing-page/patient-landing-page.module').then( m => m.PatientLandingPagePageModule)
  },
  {
    path: 'patient-medical-information',
    loadChildren: () => import('./patient-medical-information/patient-medical-information.module').then( m => m.PatientMedicalInformationPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'patient-appointments',
    loadChildren: () => import('./patient-appointments/patient-appointments.module').then( m => m.PatientAppointmentsPageModule)
  },
  {
    path: 'user-account',
    loadChildren: () => import('./user-account/user-account.module').then( m => m.UserAccountPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
