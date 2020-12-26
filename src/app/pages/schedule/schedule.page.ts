import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    formGroup: FormGroup;
    isEditable = false;
    isOccurrenceDisabled = true;

    // datetime picker data
    currentDate = new Date().toString()

    // event data
    evType: string = 'one';
    evStyle: string = 'daily';
    evOccurrence: number = 1;

    // calendar data
    date: string;
    dateMulti: Date[];
    dateRange: { from: string; to: string; };
    dateType: 'string';
    optionsMulti: CalendarComponentOptions = {
      pickMode: 'single'
    };

    // optionsMulti: CalendarComponentOptions = {
    //   pickMode: 'multi'
    // };

    // constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
      // this.formGroup = this._formBuilder.group({
      //   firstCtrl: ['', Validators.required]
      // });
      // console.log(this.formGroup.controls.firstCtrl.value)
    }


    setEventOnCalendar(ev) {
      console.log(typeof ev.target.value, ev.target.value);
    }

    setType(ev) {
      console.log(ev.target.value);
      if(ev.target.value == 'more') {
        this.isOccurrenceDisabled = false
        this.evOccurrence = 2
        this.optionsMulti = {
          pickMode: 'multi'
        };
      } else {
        this.isOccurrenceDisabled = true
        this.optionsMulti = {
          pickMode: 'single'
        };
      }
    }

    setStyle(ev) {
      if(ev.target.value == 'daily') {
        this.optionsMulti = {
          pickMode: 'range'
        };
      }
    }

    changeStart(ev) {
      if(this.optionsMulti.pickMode == 'single') {
        console.log((new Date(ev['_d']).toDateString()));
        this.date = new Date(ev['_d']).toDateString();
      } else {
        ev.forEach(e => {
          console.log(new Date(e['_d']).toDateString());
          this.dateMulti.push(new Date(e['_d']))
        })
      }
    }
}
