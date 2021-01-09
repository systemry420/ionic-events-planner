import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EventService } from 'src/app/services/event/event.service';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  homeEvents
  currentUser
  downloading = false

  constructor(
    private eventService: EventService,
    public translate: TranslateService,
    private authService: AuthService,
    private router: Router,
    private menu: MenuController
    ) { }

  ngOnInit() {
    this.downloading = true
    this.menu.enable(true, 'custom');
    this.eventService.getEvents().subscribe(data=>{
      this.homeEvents = data
      this.downloading = false
    })
  }

  gotoSchedule() {
    this.router.navigate(['home/add-event'])
  }
}
