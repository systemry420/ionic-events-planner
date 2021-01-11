import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvent } from '../../shared/event.interface'
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventObs: Observable<any[]>
  events
  userId

  constructor(private authService: AuthService,
    private firestore: AngularFirestore
  ) {
  }
  
  getEvents() {
    return this.firestore.collection('events').valueChanges()
  }
  
  getMyEvents() {
    this.authService.userSubject.subscribe(user => {
      this.userId = user.id
    })
    return this.firestore.collection('events', ref=> ref.where('userId', '==', this.userId)).valueChanges()
  }

  addEvent(title, type, style, occur, dates, location, tags) {
    let newEvent = {
      title,
      type,
      style,
      occur,
      dates,
      location,
      tags,
      userId: this.userId
    }


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
