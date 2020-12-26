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

    // calendar data
    date: string;
    dateMulti: string[];
    dateType: 'string';

    optionsMulti: CalendarComponentOptions = {
      pickMode: 'multi'
    };

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
      this.formGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      console.log(this.formGroup.controls.firstCtrl.value)
    }

}
