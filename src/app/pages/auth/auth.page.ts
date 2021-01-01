import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/user.interface';
import { AuthResponse } from "../../services/auth/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoginview = false

  isLoading = false
  error: string = null

  constructor(private userService: UserService, private toast: ToastService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  switchMode() {
    this.isLoginview = !this.isLoginview
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const passowrd = form.value.password;
    this.submitData(email, passowrd)
  }

  onSignup(user: User) {
    const email = user.username;
    const password = user.password;
    const displayName = user.firstName + ' ' + user.lastName
    this.submitData(email, password, displayName)
    // submit other data
    this.userService.submitUserData(user).then(res => {
      console.log(res);
      
    })
  }

  submitData(email, password, displayName?) {
    let authObs: Observable<AuthResponse>

    this.isLoading = true
    if(this.isLoginview) {
      authObs = this.authService.login(email, password)
    } else {
      authObs = this.authService.signup(email, password, displayName)
    }

    authObs.subscribe(respData => {
      console.log(respData);
      if(respData.kind == "identitytoolkit#SignupNewUserResponse") {
        this.toast.presentToast("Your account is created successfully!")
        this.isLoginview = true
      }
      // reset form 
      this.isLoading = false
      if(respData.registered) {
        this.router.navigate(['pages/home'])
      }
    },
    error => {
      this.isLoading = false
      console.log(error);
      // outsource to an alert component or display instant error
    })
  }

}
