import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular'

import { Plugins, Capacitor } from '@capacitor/core'

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user/user.service';
import { User } from './shared/user.interface';
import {TranslateService} from '@ngx-translate/core';
import { ThemeService } from './services/theme/theme.service';

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
    private router: Router,
    private themeService: ThemeService,
    private platform: Platform,
    translate: TranslateService
  ) {
    this.initializeApp();
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
     translate.use('ar');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if(Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide()
      }
    });
  }

  ngOnInit() {
    if(this.authService.autoLogin()) {
      // this.router.navigate(['home'])
      // this.getUser()
    }

    this.themeService.setMode(
      localStorage.getItem('dark-mode')
    )

    this.router.navigate(['splash'])
    setTimeout(() => {
      this.router.navigate(['auth'])
    }, 5000);

  }

}
