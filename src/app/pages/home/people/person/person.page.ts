import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
loadedPerson: User = {
    id: '',
    firstName: '',
    lastName: '',
    address: '',
    job: '',
    mobileNumber: '',
    age: 0,
    gender: '',
    email: '',
    password: '',
    events: [],
    image: ''
}

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("personId")) {
        // redirect
        return;
      }

      const personId = paramMap.get("personId");
      
      this.userService.getUserData(personId)
        .subscribe((user: User) => {
          this.loadedPerson = user
        })
    });
  }

}
