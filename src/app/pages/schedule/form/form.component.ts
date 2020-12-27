import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Output() typeEvent = new EventEmitter()
  @Output() styleEvent = new EventEmitter()
  @Output() occurEvent = new EventEmitter()

  // event data
  evType: string = 'one';
  evStyle: string = 'daily';
  evOccurrence: number = 1;

  options: CalendarComponentOptions

  constructor() { }

  ngOnInit() {
    this.typeEvent.emit(this.evType)
    this.styleEvent.emit(this.evStyle)
    this.occurEvent.emit(this.evOccurrence)
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
