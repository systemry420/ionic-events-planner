import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/user.interface';
import { AuthResponse } from "../../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoginview = true
  isLoading = false
  error: string = null

  constructor(private authService: AuthService) { }

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
    this.submitData(email, password)
    // submit other data
  }

  submitData(email, password) {
    let authObs: Observable<AuthResponse>

    this.isLoading = true
    if(this.isLoginview) {
      authObs = this.authService.login(email, password)
    } else {
      authObs = this.authService.signup(email, password)
    }

    authObs.subscribe(respData => {
      console.log(respData);
      this.isLoading = false
    },
    error => {
      this.isLoading = false
      console.log(error);
      // outsource to an alert component
    }
    )
  }

}
