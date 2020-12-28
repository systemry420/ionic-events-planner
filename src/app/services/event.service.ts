import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../shared/event.interface'
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventObs: Observable<any[]>
  events

  constructor( private firestore: AngularFirestore) {

  }

  getEvents() {
    return this.firestore.collection('events').valueChanges()
  }

  addEvent(type, style, occur, dates, location) {
    let newEvent = new IEvent(type, style, occur, dates, location)
    // this.events.push(newEvent)
  }
}
