import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.page.html',
  styleUrls: ['./my-events.page.scss'],
})
export class MyEventsPage implements OnInit {
  myEvents

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getMyEvents().subscribe(data => {
      this.myEvents = data
      console.log(this.myEvents);
    })
    
  }



}
