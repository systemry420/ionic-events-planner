import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoginview = true

  constructor() { }

  ngOnInit() {
  }

  switchMode() {
    this.isLoginview = !this.isLoginview
  }

  onSubmit(form: NgForm) {
    alert('shit')
  }

}
