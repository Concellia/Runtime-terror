import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientMedicalInformationPage } from './patient-medical-information.page';

describe('PatientMedicalInformationPage', () => {
  let component: PatientMedicalInformationPage;
  let fixture: ComponentFixture<PatientMedicalInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMedicalInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientMedicalInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
