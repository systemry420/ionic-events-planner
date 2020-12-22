import { Component, OnInit } from '@angular/core';
import { User } from './user.interface'

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
    username: '',
    password: '',
  };

  constructor() { }

  ngOnInit() {
  }

  updateInfo() {

  }

}
