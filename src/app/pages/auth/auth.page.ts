import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/services/alert/alert.service';
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

  constructor(private alertCtrl: AlertService, private userService: UserService, private toast: ToastService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  switchMode() {
    this.isLoginview = !this.isLoginview
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password)
    .subscribe(respData => {
        console.log(respData);

        // this.isLoading = false
        if(respData.registered) {
          this.router.navigate(['home'])
        }
      },
      error => {
        this.isLoading = false
        this.alertCtrl.presentAlert(error);
      }
    )
  }


  submitData(email, password) {
    // let authObs: Observable<AuthResponse>

    // this.isLoading = true
    // if(this.isLoginview) {
    //   authObs = this.authService.login(email, password)
    // } else {
    //   authObs = this.authService.signup(email, password)
    // }

    // authObs.subscribe(respData => {
    //   console.log(respData);
    //   if(respData.kind == "identitytoolkit#SignupNewUserResponse") {
    //     // this.toast.presentToast("Your account is created successfully!")
    //   }
    //   // reset form
    //   this.isLoading = false
    //   if(respData.registered) {
    //     this.router.navigate(['pages/home'])
    //   }
    // },
    // error => {
    //   this.isLoading = false
    //   console.log(error);
    //   this.alertCtrl.presentAlert(error);
    // })
  }

}
