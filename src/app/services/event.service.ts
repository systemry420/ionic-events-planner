import { Injectable } from '@angular/core';
import { IEvent } from '../shared/event.interface'


@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: IEvent[] = [
    {
      title: 'Facebook Dev Circle',
      type: 'One time',
      style: 'daily',
      occurrence: 1,
      dates: ['Today - 5:40 pm'],
      tags: ['Job', 'planning', 'Development', 'programming'],
      status: "Going",
      place: {
          city: 'beirut',
          lat: 1,
          lng: 1,
      }
    },
    {
      title: 'Google BTW',
      type: 'Recurring',
      style: 'Weekly',
      occurrence: 2,
      dates: ['Mon 1/2/2021', 'Mon 8/2/2021'],
      tags: ['Training', 'Team work'],
      status: "Interested",
      place: {
          city: 'baalbek',
          lat: 1,
          lng: 1,
      }
    },
    {
      title: 'Google BTW',
      type: 'Recurring',
      style: 'Weekly',
      occurrence: 2,
      dates: ['Mon 1/2/2021', 'Mon 8/2/2021'],
      tags: ['Training', 'Team work'],
      status: "Interested",
      place: {
          city: 'baalbek',
          lat: 1,
          lng: 1,
      }
    },
  ]

  constructor() { }

  getEvents() {
    return this.events
  }

  addEvent(type, style, occur, dates, location) {
    let newEvent = new IEvent(type, style, occur, dates, location)
    this.events.push(newEvent)
  }
}
