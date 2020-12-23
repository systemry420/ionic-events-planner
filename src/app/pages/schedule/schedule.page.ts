import { Component, OnInit } from '@angular/core';
import { Event } from './event.interface'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  event: Event = {
    type: '',
    style: '',
    occurrence: 1,
    place: {
        city: '',
        latitude: 1,
        longitude: 1,
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
