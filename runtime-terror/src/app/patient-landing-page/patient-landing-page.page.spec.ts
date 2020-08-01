import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatientLandingPagePage } from './patient-landing-page.page';

describe('PatientLandingPagePage', () => {
  let component: PatientLandingPagePage;
  let fixture: ComponentFixture<PatientLandingPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientLandingPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientLandingPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
