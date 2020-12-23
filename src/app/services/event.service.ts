import { Injectable } from '@angular/core';
import { Event } from './event.interface'


@Injectable({
  providedIn: 'root'
})
export class EventService {

  event: Event[] = [
    {
      type: '',
      style: '',
      occurrence: 1,
      place: {
          city: '',
          latitude: 1,
          longitude: 1,
      }
    },
    {
      type: '',
      style: '',
      occurrence: 2,
      place: {
          city: '',
          latitude: 1,
          longitude: 1,
      }
    },
  ]

  constructor() { }

  getEvents() {
    return this.event
  }
}
