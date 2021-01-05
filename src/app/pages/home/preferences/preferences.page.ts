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
   if(this.lang == 'ar') {
     this.themeService.setLanguage('ar')
    } else {
      this.themeService.setLanguage('en')
   }
  }

  onToggleTheme(ev) {
    this.themeService.setMode(ev.detail.checked)
  }

}