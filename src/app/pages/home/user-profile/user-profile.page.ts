import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActionSequence } from 'protractor';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../../shared/user.interface'
import {TranslateService} from '@ngx-translate/core';

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

  constructor(
    public translate: TranslateService,
    private firestore: AngularFirestore,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.authService.user.subscribe(data=>{
      this.userService.getUserData(data.id)
      .subscribe((d:any)=>{
        this.user = d
      })
    })
  }


  updateInfo() {
    this.authService.user.subscribe(user=>{
      this.userService.updateUserData(user.id, this.user)
      .then(res => {
        console.log("success");
        
      }, 
      error=>{
        console.log("something went wrong");
        
      })
    })
  }

}
