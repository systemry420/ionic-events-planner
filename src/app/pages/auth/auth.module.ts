import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule
  ],
  exports: [
    AuthPage
  ],
  declarations: [AuthPage, LoginComponent, SignupComponent]
})
export class AuthPageModule {}
