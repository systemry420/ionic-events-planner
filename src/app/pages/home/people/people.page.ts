import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  users
  constructor(
    private userService: UserService,
    public translate: TranslateService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users
      })
  }
}
