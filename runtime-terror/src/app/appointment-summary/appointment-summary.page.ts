import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-summary',
  templateUrl: './appointment-summary.page.html',
  styleUrls: ['./appointment-summary.page.scss'],
})
export class AppointmentSummaryPage implements OnInit {
  confirm = true;

  constructor() { }

  ngOnInit() {
  }

  confirmation()
  {
    this.confirm = false;
  }

}
