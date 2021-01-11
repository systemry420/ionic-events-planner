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
import { AddEventPage } from './add-event/add-event.page';
import { AddEventPageModule } from './add-event/add-event.module';
import { TabsPageModule} from './tabs/tabs.module'
import { PreferencesPageModule } from './preferences/preferences.module';
import { MainPageModule } from './main/main.module';
import { PeoplePageModule } from './people/people.module';
import { UserProfilePageModule } from './user-profile/user-profile.module';
import { MyEventsPageModule } from './my-events/my-events.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // TranslateModule.forChild(),
    TabsPageModule,
    AddEventPageModule,
    MainPageModule,
    PreferencesPageModule,
    PeoplePageModule,
    MyEventsPageModule,
    UserProfilePageModule,
    SharedModule
  ],
  declarations: [
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
})
export class HomePageModule {}
