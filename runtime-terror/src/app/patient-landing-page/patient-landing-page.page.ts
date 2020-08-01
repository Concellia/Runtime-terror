import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-landing-page',
  templateUrl: './patient-landing-page.page.html',
  styleUrls: ['./patient-landing-page.page.scss'],
})
export class PatientLandingPagePage implements OnInit {
  doctors: any;
  rate = [];
rating()
{

}
  constructor() { }

  ngOnInit() {
    fetch('./assets/data/doctor.json').then(res => res.json())
    .then(json => {
      this.doctors = json;
      for(let i = 0; i<json.length; i++)
      {
        if(json[i].rating == "5")
        {
          this.rate.push(json[i])
        }
      }
    });
  }

}
