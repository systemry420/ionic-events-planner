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

  submitUserData(user) {
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("users")
          .add(user)
          .then(res => {
            resolve(res)
          }, err => reject(err));
    });
  }
user
  getCurrentUser() {
    return this.firestore.collection('users').valueChanges()
    
  }

}
