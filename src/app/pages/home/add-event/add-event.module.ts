import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEventPageRoutingModule } from './add-event-routing.module';

import { AddEventPage } from './add-event.page';
import { MatStepperModule, MatVerticalStepper } from '@angular/material/stepper';
import { CalendarModule } from 'ion2-calendar';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { TagInputModule } from 'ngx-chips';
import { TabsPageModule } from '../tabs/tabs.module'
import { FormComponent } from './form/form.component';
import { MapComponent } from './map/map.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddEventPageRoutingModule,
    MatStepperModule,
    // MatVerticalStepper,
    ReactiveFormsModule,
    CalendarModule,
    TranslateModule.forChild(),
    GoogleMapsModule,
    TagInputModule,
    TabsPageModule
  ],
  declarations: [
    AddEventPage,
    FormComponent,
    MapComponent
  ],
  exports: [
    
  ],
  providers: [
    Geolocation
  ]
})
export class AddEventPageModule {}
