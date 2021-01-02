import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActionSequence } from 'protractor';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../../shared/user.interface'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    address: '',
    job: '',
    mobileNumber: '',
    age: 0,
    gender: '',
    email: '',
    events: [],
    password: '',
  };

  constructor(private firestore: AngularFirestore, private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.userService.getCurrentUser()
    .subscribe(users => {
      this.authService.user.subscribe(data=> {
        users.forEach((user: any) => {
          if(user.username == data.email) {
            this.user = user
          }
        });
      })
    })
  }

  updateInfo() {

    let docs = this.firestore.collection('users').snapshotChanges()
    docs.subscribe( actions=>{
      return actions.map(d =>{
        console.log(d.payload.doc.id);
        
      })
      
    })

    console.log(this.user.email);
    
    
  }

}
