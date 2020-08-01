import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorProfileBuilderPage } from './doctor-profile-builder.page';

describe('DoctorProfileBuilderPage', () => {
  let component: DoctorProfileBuilderPage;
  let fixture: ComponentFixture<DoctorProfileBuilderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorProfileBuilderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorProfileBuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
