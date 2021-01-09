import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';
import { TabsPageModule } from '../tabs/tabs.module';
import { TranslateModule } from '@ngx-translate/core';
import { PersonPageModule } from './person/person.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeoplePageRoutingModule,
    TabsPageModule,
    TranslateModule,
    PersonPageModule
  ],
  declarations: [
    PeoplePage,
  ]
})
export class PeoplePageModule {}
