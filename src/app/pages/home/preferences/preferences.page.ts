import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
  lang
  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage() {
    if(this.lang == 'ar')
      this.translate.use('ar');
    else
      this.translate.use('en');
  }

}
