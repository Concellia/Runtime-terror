import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-landing-page',
  templateUrl: './patient-landing-page.page.html',
  styleUrls: ['./patient-landing-page.page.scss'],
})
export class PatientLandingPagePage implements OnInit {
  doctors = [
    {
      name: "Dr Mokoena",
      practice: "General Practitioner",
      address: "250 Marshall street Johannesburg",
      contact: "0115268745",
      time: "08:00-16:00",
      rating: "5",
      distance: "50km Away"
    },
    {
      name: "Dr Laubuschagne",
      practice: "Dentist",
      address: "250 Marshall street Johannesburg",
      contact: "0115268562",
      time: "10:00-16:00",
      rating: "5",
      distance: "900km Away"
    },
    {
      name: "Dr Smith",
      practice: "General Practitioner",
      address: "250 Marshall street Johannesburg",
      contact: "0115268895",
      time: "08:00-17:00",
      rating: "4",
      distance: "23km Away"
    },
    {
      name: "Dr Cho",
      practice: "Pediatricians",
      address: "250 Marshall street Johannesburg",
      contact: "0115268856",
      time: "08:00-14:00",
      rating: "3",
      distance: "49km Away"
    },
    {
      name: "Dr Sthole",
      practice: "Allergist",
      address: "250 Marshall street Johannesburg",
      contact: "0115268781",
      time: "07:00-15:00",
      rating: "4",
      distance: "1km Away"
    },
    {
      name: "Dr Chavalala",
      practice: "Dermatologist",
      address: "250 Marshall street Johannesburg",
      contact: "01152687584",
      time: "08:00-18:00",
      rating: "5",
      distance: "200km Away"
    },
    {
      name: "Dr Doe",
      practice: "Dentist",
      address: "250 Marshall street Johannesburg",
      contact: "0115268798",
      time: "08:00-16:00",
      rating: "2",
      distance: "15km Away"
    },
    {
      name: "Dr George",
      practice: "Neurologists",
      address: "250 Marshall street Johannesburg",
      contact: "0115268752",
      time: "08:00-16:00",
      rating: "5",
      distance: "52km Away"
    },
    {
      name: "Dr Ramabulana",
      practice: "General Practitioner",
      address: "250 Marshall street Johannesburg",
      contact: "0115268523",
      time: "08:00-16:00",
      rating: "5",
      distance: "200km Away"
    },
    {
      name: "Dr Khosa",
      practice: "General Practitioner",
      address: "250 Marshall street Johannesburg",
      contact: "011526875642",
      time: "08:00-16:00",
      rating: "2",
      distance: "50km Away"
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
