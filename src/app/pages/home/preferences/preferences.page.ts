import { Component, Renderer2, OnInit, Inject } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DOCUMENT} from '@angular/common';
import { ThemeService } from '../../../services/theme/theme.service'

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {
  lang
  constructor(
    @Inject(DOCUMENT) private doc,
    private themeService: ThemeService,
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
    console.log(ev);
    
    this.themeService.setMode(ev.detail.checked)
  }

}