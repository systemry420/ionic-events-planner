import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  homeEvents
  currentUser

  constructor(
    private eventService: EventService,
    public translate: TranslateService,
    private authService: AuthService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data=>{
      this.homeEvents = data
    })
  }
}
