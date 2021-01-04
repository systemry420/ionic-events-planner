import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
  lang
  constructor(
    @Inject(DOCUMENT) private doc,
    private renderer: Renderer2,
    public translate: TranslateService) { }

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

  onToggleTheme(ev) {
    // preserve in localstorage
    if(ev.target.checked) {
      this.renderer.setAttribute(document.body, 'color-theme', 'dark')
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light')
    }
  }

}