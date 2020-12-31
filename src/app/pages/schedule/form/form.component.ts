import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Output, Input, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('form') form;
  @Output() typeEvent = new EventEmitter()
  @Output() styleEvent = new EventEmitter()
  @Output() occurEvent = new EventEmitter()
  @Output() titleEvent = new EventEmitter()
  @Input() resetForm;

  // event data
  evType: string = 'one';
  evStyle: string = 'daily';
  evOccurrence: number = 1;
  evTitle: string = '';

  options: CalendarComponentOptions

  constructor() { }

  ngOnChanges() {
    if(this.resetForm) {
      this.form.reset()
    }
  }

  ngOnInit() {
    // this.typeEvent.emit(this.evType)
    // this.styleEvent.emit(this.evStyle)
    // this.occurEvent.emit(this.evOccurrence)
    // this.occurEvent.emit(this.evTitle)
  }

  setTitle(ev) {
    this.titleEvent.emit(this.evTitle)
  }

  setType(ev) {
    if(ev.target.value == 'more') {
      this.evOccurrence = 2
    }
    this.typeEvent.emit(this.evType)
    this.occurEvent.emit(this.evOccurrence)
  }

  setStyle() {
    this.styleEvent.emit(this.evStyle)
  }

  setOccurrence() {
    this.occurEvent.emit(this.evOccurrence)
  }
}
