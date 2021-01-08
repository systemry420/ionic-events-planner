import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  @Input() currentUserData: User

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private eventService: EventService,
    private router: Router,
    private menu: MenuController
    ) {
      this.menu.enable(true);
      let userData = JSON.parse(localStorage.getItem('userData'))
      // console.log(userData);
      
      if(userData) {
        this.userService.getUserData(userData.id)
        .subscribe((d:any)=>{
          this.currentUserData = d
        })
      }
  }

  public selectedIndex = 0;
  public pages = [
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

  }

  logout() {
    localStorage.removeItem('userData')
    this.router.navigate(['auth'])
  }

}
