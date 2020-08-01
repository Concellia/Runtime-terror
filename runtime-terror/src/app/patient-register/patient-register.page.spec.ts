import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientRegisterPage } from './patient-register.page';

describe('PatientRegisterPage', () => {
  let component: PatientRegisterPage;
  let fixture: ComponentFixture<PatientRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
