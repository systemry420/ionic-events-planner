import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotfoundPage implements OnInit {

  constructor(
    private router: Router,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.menu.enable(false, 'custom');
    this.redirect()
  }

  seconds = 5;
  redirect() {
    setInterval(()=>{
      this.seconds -= 1;
      if(this.seconds == 0) {
        this.router.navigate(["splash"])
      }
    }, 1000)
  }

}
