import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar'
import * as moment from 'moment';
import { EventService } from 'src/app/services/event.service';
import { ToastService } from 'src/app/services/toast.service';
import { IEvent } from '../../shared/event.interface'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    @ViewChild('stepper') stepper ;

    formGroup: FormGroup;
    isEditable = false;
    isOccurrenceDisabled = true;

    // event data
    evType: string = 'one';
    evStyle: string = 'daily';
    evTitle: string = '';
    evOccurrence: number = 1;
    selectedDates = [];
    location;
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

    constructor(private toast: ToastService, private eventService: EventService, public toastController: ToastController) {

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
                  this.selectedDay + i * step),
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
                    this.selectedDay + i),
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
      this.location = {
        city: "Beirut",
        lat: latlng.lat,
        lng: latlng.lng
      };
    }

    reset() {
      this.stepper.reset()
      // reset form & cal
    }

    submitEvent() {
      // check for validity and show alert
      this.eventService.addEvent(
        this.evTitle, this.evType, this.evStyle, this.evOccurrence, this.selectedDates, this.location, this.tags
      ).then(res=>{
        console.log(res);
        this.toast.presentToast("Your event has been saved.")
      })
    }

}
