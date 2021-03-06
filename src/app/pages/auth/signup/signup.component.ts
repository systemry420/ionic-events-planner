import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Output() signupEvent = new EventEmitter()
  isForm1Valid: boolean
  
  userID

  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    job: '',
    mobileNumber: '',
    age: 0,
    gender: '',
    email: '',
    password: '',
    events: [],
    image: 'https://www.lse.ac.uk/International-Inequalities/Assets/Images/BlankImage.jpg'
  };

  constructor(private alertCtrl: AlertService, private userService: UserService, private toast: ToastService, private authService: AuthService, private router: Router) { 

  }


  ngOnInit() {}

  onSignup(form) {
    // this.user = {id: this.userID, ...this.user}
    this.user['id'] = this.userID
    this.userService.submitUserData(this.userID, this.user)
    .then(res=>{
      this.toast.presentToast("Your account is created successfully!")
      this.signupEvent.emit();
    }, err =>{
      this.alertCtrl.presentAlert(err);
    })
  }


  checkEmail(stepper) {
    const email = this.user.email;
    const password = this.user.password;
    let authObs = this.authService.signup(email, password)

    authObs.subscribe(respData => {
      console.log(respData);
      if(respData.kind == "identitytoolkit#SignupNewUserResponse") {
        this.userID = respData.localId
        this.isForm1Valid = true
        stepper.next()
      }
    },
    error => {
      // this.isLoading = false
      console.log(error);
      this.alertCtrl.presentAlert(error);
    })

  }

}
