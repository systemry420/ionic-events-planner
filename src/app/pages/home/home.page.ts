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

  constructor(  private menu: MenuController,
    private authService: AuthService, private userService: UserService, private eventService: EventService) { 
    this.menu.enable(true, 'custom');
  }


  ngOnInit() {
    this.eventService.getEvents().subscribe(data=>{
      this.homeEvents = data
    })
  }


}
