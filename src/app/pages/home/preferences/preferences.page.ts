import { Component, OnInit, Inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
  lang
  constructor(@Inject(DOCUMENT) private doc, public translate: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage() {
    if(this.lang == 'ar'){
      this.translate.use('ar');
      this.doc.documentElement.dir = 'rtl';
    }
    else{
      this.translate.use('en');
      this.doc.documentElement.dir = 'ltr';
    }
  }

}
