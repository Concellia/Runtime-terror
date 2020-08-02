import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-landing-page',
  templateUrl: './patient-landing-page.page.html',
  styleUrls: ['./patient-landing-page.page.scss'],
})
export class PatientLandingPagePage implements OnInit {
  doctors: any;
  rate = [];
  generalP = [];
  dent = [];
  neuro = [];
  appoint = [];
  shows = true;
  showAppointment = false;
  eventSource = [];

source = "assets/img/doctor2.jpg"
insertpicture(id){
  this.source = "assets/img/doctor"+id+".jpg"
}

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date();

  onViewTitleChanged(title) {
    console.log(title);
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
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
        if(json[i].practice == "General Practitioner")
        {
          this.generalP.push(json[i])
        }
        if(json[i].practice == "Dentist")
        {
          this.dent.push(json[i])
        }
        if(json[i].practice == "Neurologists")
        {
          this.neuro.push(json[i])
        }
      }
    });
  }

  generalPractitioner()
  {
      this.shows = false;
     this.rate = this.generalP;
  }
  dentist()
  {
      this.shows = false;
     this.rate = this.dent;
  }

  neurologist()
  {
      this.shows = false;
     this.rate = this.neuro;
  }
appointment(name)
{
  for(let i = 0; i<this.doctors.length; i++)
  {
    if(this.doctors[i].name == name)
    {
      this.showAppointment = true;
      this.appoint.push(this.doctors[i])
    }
  }
}



}
