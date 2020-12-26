import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    isEditable = false;

    date: string;
    type: 'string';

    onChange($event) {
      console.log($event);
    }

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
    }

}
