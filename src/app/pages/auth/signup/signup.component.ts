import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

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

  ngOnInit() {}

  onSignup(form) {
    if(!form.valid) {
      return;
    }
    // submit data to database
    console.log(this.user);
    
  }

}
