import { Injectable } from '@angular/core';
import { Event } from './event.interface'


@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Event[] = [
    {
      title: 'Facebook Dev Circle',
      type: 'One time',
      style: 'daily',
      occurrence: 1,
      date: ['Today - 5:40 pm'],
      tags: ['Job', 'planning', 'Development', 'programming'],
      status: "Going",
      place: {
          city: 'beirut',
          latitude: 1,
          longitude: 1,
      }
    },
    {
      title: 'Google BTW',
      type: 'Recurring',
      style: 'Weekly',
      occurrence: 2,
      date: ['Mon 1/2/2021', 'Mon 8/2/2021'],
      tags: ['Training', 'Team work'],
      status: "Interested",
      place: {
          city: 'baalbek',
          latitude: 1,
          longitude: 1,
      }
    },
    {
      title: 'Google BTW',
      type: 'Recurring',
      style: 'Weekly',
      occurrence: 2,
      date: ['Mon 1/2/2021', 'Mon 8/2/2021'],
      tags: ['Training', 'Team work'],
      status: "Interested",
      place: {
          city: 'baalbek',
          latitude: 1,
          longitude: 1,
      }
    },
  ]

  constructor() { }

  getEvents() {
    return this.events
  }
}
