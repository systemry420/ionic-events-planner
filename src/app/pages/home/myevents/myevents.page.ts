import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.page.html',
  styleUrls: ['./myevents.page.scss'],
})
export class MyeventsPage implements OnInit {

  myEvents = []

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getMyEvents().subscribe(data => {
      this.myEvents = data
      // console.log(this.myEvents);
    })
  }

}
