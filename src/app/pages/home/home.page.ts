import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EventService } from 'src/app/services/event/event.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/user.interface';
import { IEvent } from '../../shared/event.interface'
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  // @ViewChild('menu') menu;
  homeEvents;
  currentUserData: User = {
    id: '',
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
  }

  public selectedIndex = 0;
  public pages = [
    // {
    //   title: 'Schedule',
    //   url: 'home/schedule',
    //   icon: 'calendar'
    // },
    {
      title: "Preferences",
      url: "home/preferences",
      icon: "settings",
    },
  ];

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem('userData'))
    if(user) {
      this.userService.getUserData(user.id).subscribe((d: any) => {
        this.currentUserData = d;
        console.log(this.currentUserData);
        this.router.navigateByUrl('home/main');
      });
    } else {
      this.authService.userSubject.subscribe(user => {
        if(user != null) {
          this.userService.getUserData(user.id)
          .subscribe((d:any)=>{
            this.currentUserData = d;
            console.log(this.currentUserData);
            setTimeout(() => {
              this.router.navigateByUrl('home/main');
            }, 1000);
          })
        }
      })
    }
  }

  logout() {
    localStorage.removeItem("userData");
    this.router.navigate(["/"]);
    this.authService.logout()
  }
}
