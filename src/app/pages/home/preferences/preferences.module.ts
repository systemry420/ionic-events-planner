import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferencesPageRoutingModule } from './preferences-routing.module';

import { PreferencesPage } from './preferences.page';
import { TabsPage } from '../tabs/tabs.page'
import { TabsPageModule } from '../tabs/tabs.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferencesPageRoutingModule,
    TabsPageModule,
    TranslateModule,
  ],
  declarations: [
    PreferencesPage
  ]
})
export class PreferencesPageModule {}
