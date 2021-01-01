import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  @Output() signupEvent = new EventEmitter()

  user: User = {
    firstName: 'a',
    lastName: 'a',
    address: 'a',
    job: 'a',
    mobileNumber: 'a',
    age: 1,
    gender: 'a',
    username: 'a@a.com',
    password: 'qwertyuiop',
    events: []
  };

  constructor() { }

  ngOnInit() {}

  onSignup(form) {
    if(!form.valid) {
      return;
    }
    // submit data to database
    this.signupEvent.emit(this.user);
    
  }

}
