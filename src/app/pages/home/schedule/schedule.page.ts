import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar'
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert/alert.service';
import { EventService } from 'src/app/services/event/event.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    @ViewChild('stepper') stepper ;

    isStep1Valid = false
    resetForm = false

    // event data
    evType: string = 'one';
    evStyle: string = 'daily';
    evTitle: string = '';
    evOccurrence: number = 1;
    selectedDates = [];
    location; updatedLocation;
    lat; lng; upLat; upLng;
    tags = ['Development', 'Team work']

    // calendar initial data
    selectedDay; selectedMonth; selectedYear
    dateMulti: string[];
    _daysConfig = []

    // dateRange: { from: string; to: string; };
    dateType: 'string';
    options: CalendarComponentOptions = {
      pickMode: 'single',
      color: 'danger'
    };

    ngOnInit() {
    }

    constructor(private router: Router,
      private alertCtrl: AlertService,
      private toast: ToastService,
      public translate: TranslateService,
      private eventService: EventService,
      public toastController: ToastController) {
    }

    setTitle(title) {
      this.evTitle = title
    }

    setType(ev) {
      this.evType = ev
      this.setEventOnCalendar()
    }

    setStyle(ev) {
      this.evStyle = ev;
      this.setEventOnCalendar()
    }

    setOccurrence(ev) {
      this.evOccurrence = ev
      this.setEventOnCalendar()
    }

    getConfig(count, step) {
      let _daysConfig = []
      for (let i = 0; i < count; i++) {
        _daysConfig.push({
          date: new Date(this.selectedYear,
                  this.selectedMonth,
                  this.selectedDay + i * step).toDateString(),
          marked: true,
          cssClass: 'marked'
        })
      }

      return _daysConfig
    }

    changeStartDate(ev) {
      let selectedDate = new Date(ev['_d']);
      this.selectedDay = selectedDate.getDate()
      this.selectedMonth = selectedDate.getMonth()
      this.selectedYear = selectedDate.getFullYear()
      this.setEventOnCalendar()
    }

    setEventOnCalendar() {
      let _daysConfig = []
      switch(this.evStyle) {
        case "daily": {
          for (let i = 0; i < this.evOccurrence; i++) {
            _daysConfig.push({
              date: new Date(
                    this.selectedYear,
                    this.selectedMonth,
                    this.selectedDay + i).toDateString(),
              marked: true,
            })
          }
        }; break;
        case "weekly": {
          _daysConfig = this.getConfig(this.evOccurrence, 7)
        }; break;
        case "monthly": {
          _daysConfig = this.getConfig(this.evOccurrence, 30)
        }; break;
      }

      this.options = {
        daysConfig: _daysConfig,
        color: 'danger'
      }

      this.selectedDates = _daysConfig.map(day => day.date.toString());
    }

    setLocation(latlng) {
      this.lat = latlng.lat;
      this.lng = latlng.lng;
      this.upLat = latlng.lat;
      this.upLng = latlng.lng;
    }

    updateLocation(ev) {
      this.upLat = ev.lat
      this.upLng = ev.lng
    }

    reset() {
      this.stepper.reset()
      this.evTitle = ''
      this.resetForm = true
      this.options = {
        daysConfig: [],
        color: 'danger'
      }
    }
 lang = this.translate.getLangs()

    step1Completed(stepper) {
      console.log(this.evTitle, this.selectedDates);
      if(this.evTitle == '') {
        if(this.lang[0] == 'ar') {
          this.translate.get('Please provide a title for your event!')
          .subscribe((res: string) => {
            this.alertCtrl.presentAlert(res);
          });
        } else {
          this.alertCtrl.presentAlert('Please provide a title for your event!');
        }
        return;
      } else if(this.selectedDates.length == 0) {
        if(this.lang[0] == 'ar') {
          this.translate.get('Please specify a starting date on calendar!')
          .subscribe((res: string) => {
            this.alertCtrl.presentAlert(res);
          });
        } else {
          this.alertCtrl.presentAlert('Please specify a starting date on calendar!');
        }
      }
      else {
        this.isStep1Valid = true
        stepper.next()
      }
    }

    checkCurrentLocation() {
      let message = ''
      if(this.lat == this.upLat && this.lng == this.upLng) {
        if(this.lang[0] == 'ar') {
          this.translate.get('Are u sure you want to proceed with current location?')
          .subscribe((res: string) => {
            message = res
          });
        } else {
          message = 'Are u sure you want to proceed with current location?'
        }

        this.alertCtrl
        .presentAlertConfirm(message)
        .then(res=> {
          if(res == 'ok') {
            this.submitEvent()
          }
        })
      } else {
        this.submitEvent()
      }
    }

    submitEvent() {
      this.location = {
        city: "Beirut",
        lat: this.upLat,
        lng: this.upLng
      }

      this.eventService.addEvent(
        this.evTitle, this.evType, this.evStyle, this.evOccurrence, this.selectedDates, this.location, this.tags
      ).then(res=>{
        console.log(res);
        this.toast.presentToast("Your event has been saved.")
      })

      this.reset()

      this.router.navigate(['home'])
    }

}
