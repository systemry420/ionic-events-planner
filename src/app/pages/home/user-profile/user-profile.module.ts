import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { ImageComponent } from './image/image.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    UserProfilePageRoutingModule,
    TranslateModule,
  ],
  declarations: [
    UserProfilePage,
    ImageComponent
  ],
  exports: [
    ImageComponent
  ]
})
export class UserProfilePageModule {}
