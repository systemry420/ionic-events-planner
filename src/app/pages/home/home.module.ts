import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { UserProfilePage } from './user-profile/user-profile.page';
import { PreferencesPage } from './preferences/preferences.page';
import { TranslateModule } from '@ngx-translate/core';
import { RouteReuseStrategy } from '@angular/router';
import { HomePage } from './home.page';
import { MainPage } from './main/main.page';
import { ImageComponent } from './user-profile/image/image.component';
import { TabsPage } from './tabs/tabs.page'
import { PeoplePage } from './people/people.page'
import { SchedulePageModule } from './schedule/schedule.module';
import { SchedulePage } from './schedule/schedule.page';
import { MatStepperModule, MatVerticalStepper, MatStep } from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // MatStepperModule,
    // MatVerticalStepper,
    // MatStep,
    TranslateModule.forChild()
  ],
  declarations: [
    UserProfilePage,
    MainPage,
    SchedulePageModule,
    PreferencesPage,
    TabsPage,
    PeoplePage,
    ImageComponent
  ],
  exports: [
    TabsPage
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class HomePageModule {}
