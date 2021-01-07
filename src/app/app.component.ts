import { Component, OnInit, Inject } from '@angular/core';
import { Platform } from '@ionic/angular'

import { Plugins, Capacitor } from '@capacitor/core'

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';
import { User } from './shared/user.interface';
import {TranslateService} from '@ngx-translate/core';
import { ThemeService } from './services/theme/theme.service';
import {DOCUMENT} from '@angular/common';

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
    email: '',
    password: '',
    events: [],
    image: ''
  };
  autologin = false

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '../home',
      icon: 'home'
    },
    {
      title: 'Schedule',
      url: '../home/schedule',
      icon: 'calendar'
    },
    {
      title: 'Preferences',
      url: '../home/preferences',
      icon: 'settings'
    }
  ];
  public labels = ['Family', 'Friends', 'Work', 'Travel', 'Reminders'];

  constructor(
    private statusBar: StatusBar,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private themeService: ThemeService,
    private platform: Platform,
    @Inject(DOCUMENT) private doc,
    translate: TranslateService
  ) {
    this.initializeApp();
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
     translate.use('en');
     this.doc.documentElement.dir = 'ltr';

    if(localStorage.getItem('userData')) {
      let user = JSON.parse(localStorage.getItem('userData'))

      this.themeService.setMode(user['dark-mode']);
      this.themeService.setLanguage(user['lang']);
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide()
      }
    });
  }
  
  ngOnInit() {
    this.getUser()
    // this.router.navigate(['splash'])
    setTimeout(() => {
      if(this.autologin) {
        this.router.navigate(['home'])
      } else {
        this.router.navigate(['auth'])
      }
    }, 4000)
  }

  getUser() {
    let userData = JSON.parse(localStorage.getItem('userData'))
    let auto = this.authService.autoLogin()
    if(auto) {
        this.userService.getUserData(userData.id)
        .subscribe((d:any)=>{
          this.currentUser = d
          this.autologin = true
        })
      }
    }

}
