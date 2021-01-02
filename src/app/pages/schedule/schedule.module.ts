import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePageRoutingModule } from './schedule-routing.module';

import { SchedulePage } from './schedule.page';
import { ReactiveFormsModule } from '@angular/forms'
import { MatStepperModule } from '@angular/material/stepper';
import { CalendarModule } from 'ion2-calendar';
import { FormComponent } from './form/form.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    ReactiveFormsModule,
    CalendarModule,
    TranslateModule.forChild(),
    GoogleMapsModule,
    SchedulePageRoutingModule
  ],
  declarations: [SchedulePage, FormComponent, MapComponent],
  providers: [Geolocation]
})
export class SchedulePageModule {}
