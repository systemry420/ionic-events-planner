import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoginview = false
  isLoading = false
  error: string = null

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  switchMode() {
    this.isLoginview = !this.isLoginview
  }

  onLogin(form: NgForm) {
    alert('shit')
  }

  onSignup(user: User) {
    const email = user.username;
    const passowrd = user.password;

    this.isLoading = true
    this.authService.signup(email, passowrd)
    .subscribe(respData => {
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
