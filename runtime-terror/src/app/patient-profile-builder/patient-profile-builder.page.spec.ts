import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientProfileBuilderPage } from './patient-profile-builder.page';

describe('PatientProfileBuilderPage', () => {
  let component: PatientProfileBuilderPage;
  let fixture: ComponentFixture<PatientProfileBuilderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProfileBuilderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientProfileBuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
