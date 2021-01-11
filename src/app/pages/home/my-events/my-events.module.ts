import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyEventsPageRoutingModule } from './my-events-routing.module';

import { MyEventsPage } from './my-events.page';
import { TabsPageModule } from '../tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageModule,
    MyEventsPageRoutingModule
  ],
  declarations: [MyEventsPage]
})
export class MyEventsPageModule {}
