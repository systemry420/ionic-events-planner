import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyeventsPageRoutingModule } from './myevents-routing.module';

import { MyeventsPage } from './myevents.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MyeventsPageRoutingModule
  ],
  declarations: [MyeventsPage]
})
export class MyeventsPageModule {}
