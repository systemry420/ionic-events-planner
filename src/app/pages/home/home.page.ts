import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventService } from 'src/app/services/event/event.service';
import { UserService } from 'src/app/services/user/user.service';
import { IEvent } from '../../shared/event.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  homeEvents
  currentUser

  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private userService: UserService,
    private eventService: EventService,
    ) {
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      this.menu.enable(true, 'custom');
  }

  public selectedIndex = 0;
  public appPages = [
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
    this.eventService.getEvents().subscribe(data=>{
      this.homeEvents = data
    })
  }


}
