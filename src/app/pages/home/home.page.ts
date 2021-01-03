import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventService } from 'src/app/services/event/event.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/user.interface';
import { IEvent } from '../../shared/event.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('menu') menu;
  homeEvents
  currentUserData

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private eventService: EventService,
    ) {
      // the lang to use, if the lang isn't available, it will use the current loader to get them
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

  ionViewWillEnter() {
    this.menu.enable(true);
  }

  ngOnInit() {
    this.getUser()
    this.eventService.getEvents().subscribe(data=>{
      this.homeEvents = data
    })
  }

  userId

  getUser() {
      this.authService.user.subscribe(data=>{
        this.userId = data.id //localID
        // console.log(this.userId);
        
        let ids = this.getAllUsersID()
        // console.log(ids);
        ids.forEach(id => {
          if(id == data.id) {
            this.userService.getUserData(id)
            .subscribe(data=> {
              this.currentUserData = data
              // console.log(data);
            })
            return;
          }
        })
      })
  }

  getAllUsersID() {
    this.userService.getIDs()
    return this.userService.ids
  }

}
