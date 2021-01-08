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

  constructor(private firestore: AngularFirestore) { }

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

  getUsers() {
    return this.firestore.collection('users').valueChanges()
  }

  // used by: home, user-profile
  getUserData(id) {
    return this.firestore.collection('users').doc(id).valueChanges()
  }

  updateUserData(id, data) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("users")
          .doc(id)
          .update(data)
          .then(res => {
            resolve(res)
          }, err => reject(err));
    });
  }

  saveUserToStorage(user) {
    let users
    if(localStorage.getItem('users') === null) {
      users = []
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
    } else {
      users = JSON.parse(localStorage.getItem('users'))
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
    }
  }

  getUsersFromStorage() {
    let users
    if(localStorage.getItem('users') === null) {
        users = []
    } else {
        users = JSON.parse(localStorage.getItem('users'))
    }
    return users
  }

}
