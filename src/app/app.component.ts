import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';
import { User } from './shared/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User = {
    firstName: '',
    lastName: '',
    address: '',
    job: '',
    mobileNumber: '',
    age: 0,
    gender: '',
    username: '',
    password: '',
    events: []
  };

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '../pages/home',
      icon: 'home'
    },
    {
      title: 'Schedule',
      url: '../pages/schedule',
      icon: 'calendar'
    },
    {
      title: 'Prefernces',
      url: '../pages/preferences',
      icon: 'settings'
    }
  ];
  public labels = ['Family', 'Friends', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    if(this.authService.autoLogin()) {
      this.router.navigate(['pages/home'])
      this.getUser()
    }
  }

  getUser() {
    this.userService.getCurrentUser()
    .subscribe(users => {
      this.authService.user.subscribe(data=> {
        users.forEach((user: any) => {
          if(user.username == data.email) {
            this.currentUser = user
          }
        });
      })
    })
  }
}
