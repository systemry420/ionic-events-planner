import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePageRoutingModule } from './schedule-routing.module';

import { SchedulePage } from './schedule.page';
import { ReactiveFormsModule } from '@angular/forms'
import { MatStepperModule } from '@angular/material/stepper';
import { MatStep } from '@angular/material/stepper';
import { MatVerticalStepper } from '@angular/material/stepper';
import { CalendarModule } from 'ion2-calendar';
import { FormComponent } from './form/form.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { TranslateModule } from '@ngx-translate/core';
import { TagInputModule } from 'ngx-chips';
import { TabsPage } from '../tabs/tabs.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatStepperModule,
    // MatVerticalStepper,
    // MatStep,
    ReactiveFormsModule,
    CalendarModule,
    TranslateModule.forChild(),
    GoogleMapsModule,
    SchedulePageRoutingModule,
    TagInputModule,
    MatStepperModule,
  ],
  declarations: [
    FormComponent,
    // TabsPage,
    MapComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [
    // MatStepperModule,
    // MatVerticalStepper,
    // MatStep,
  ],
  providers: [Geolocation]
})
export class SchedulePageModule {}
