import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Output() loginEvent = new EventEmitter()


  constructor(private router: Router) { }

  ngOnInit() {}

  switchMode() {

  }

  onLogin(form) {
    // check if data is valid & available in DB
    this.router.navigateByUrl('pages/home')
  }

}
