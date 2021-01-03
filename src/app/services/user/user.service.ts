import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users
  currentUser

  constructor(private authService: AuthService, private firestore: AngularFirestore) { }

  submitUserData(id, user) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("users")
          .doc(id)
          .set(user)
          .then(res => {
            resolve(res)
          }, err => reject(err));
    });
  }
user
  getUsers() {
    return this.firestore.collection('users').valueChanges()
  }

  getUserData(id) {
    return this.firestore.collection('users').doc(id)
    .valueChanges()
  }

ids = []
  getIDs() {
    this.users = this.firestore.collection('users').snapshotChanges()
    .subscribe(actions => {
      return actions.map(a => {
        const id = a.payload.doc.id;
        this.ids.push(id);
      });
    });
  }

}
