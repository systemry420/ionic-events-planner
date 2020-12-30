import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../../shared/event.interface'
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

  addEvent(title, type, style, occur, dates, location, tags) {
    let newEvent = {
      title,
      type,
      style,
      occur,
      dates,
      location,
      tags
    }

    console.log(newEvent);
    

    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("events")
          .add(newEvent)
          .then(res => {
            resolve(res)
          }, err => reject(err));
    });
  }
}
