import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventService } from 'src/app/services/event/event.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/user.interface';
import { IEvent } from '../../shared/event.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // @ViewChild('menu') menu;
  homeEvents
  currentUserData: User = {
      firstName: '',
      lastName: '',
      address: '',
      job: '',
      mobileNumber: '',
      age: 0,
      gender: '',
      email: '',
      events: [],
      password: '',
      image: ''
  }

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private eventService: EventService,
    private router: Router,
    private menu: MenuController
    ) {
      this.menu.enable(true);
      this.getUser()
  }

  public selectedIndex = 0;
  public pages = [
    {
      title: 'Main',
      url: 'home/main',
      icon: 'home'
    },
    {
      title: 'Schedule',
      url: 'home/schedule',
      icon: 'calendar'
    },
    {
      title: 'Preferences',
      url: 'home/preferences',
      icon: 'settings'
    }
  ];

  ngOnInit() {
    this.menu.enable(true);
    this.getUser()
  }

  getUser() {
    let userData = JSON.parse(localStorage.getItem('userData'))
    console.log(this.authService.user)
    if(userData) {
      this.userService.getUserData(userData.id)
      .subscribe((d:any)=>{
        this.currentUserData = d
      })
    }
  }

  logout() {
    console.log('logout');
    this.router.navigate(['auth'])
  }

}
