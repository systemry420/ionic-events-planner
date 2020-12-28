import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { IEvent } from '../../shared/event.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  homeEvents: IEvent[]
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.homeEvents = this.eventService.getEvents()
  }


}
