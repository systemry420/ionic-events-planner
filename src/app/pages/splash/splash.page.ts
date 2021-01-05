import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  splash = true
  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private themeService: ThemeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.menu.enable(false, 'custom');

    setTimeout(() => {
      this.splash = false
      if(this.authService.autoLogin()) {
        this.router.navigate(['home'])
      } else {
        this.router.navigate(['auth'])
      }
    }, 1000);
  }

}
