import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarComponentOptions, DayConfig } from 'ion2-calendar'
import * as moment from 'moment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    formGroup: FormGroup;
    isEditable = false;
    isOccurrenceDisabled = true;

    // event data
    evType: string;
    evStyle: string;
    evOccurrence: number;
    // calendar initial data
    selectedDate;
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

    setType(ev) {
      this.evType = ev
      this.setEventOnCalendar()
    }

    setStyle(ev) {
      console.log(ev);
      this.evStyle = ev;
      this.setEventOnCalendar()
    }

    setOccurrence(ev) {
      console.log(ev);
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
      this.selectedDate = new Date(ev['_d']);
      this.selectedDay = this.selectedDate.getDate()
      this.selectedMonth = this.selectedDate.getMonth()
      this.selectedYear = this.selectedDate.getFullYear()
      this.setEventOnCalendar()
    }

    setEventOnCalendar() {
      console.log(this.selectedYear,
        this.selectedMonth,
        this.selectedDay);

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
    }

}
