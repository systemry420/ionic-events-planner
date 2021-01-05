import { Injectable, Inject, Renderer2, RendererFactory2  } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private doc,
    public translate: TranslateService,
    private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  mode; language

  setMode(value) {
    // console.log(typeof(value), value.toString());

    if(value !== undefined) {
      if(value.toString() == 'true') {
        this.mode = true
        this.renderer.setAttribute(document.body, 'color-theme', 'dark')
      } else {
        this.mode = false
        this.renderer.setAttribute(document.body, 'color-theme', 'light')
      }
      this.updateSettings()
    }
  }

  setLanguage(lang) {
    if(lang !== undefined) {
      if(lang == 'ar'){
        this.translate.use('ar');
        this.doc.documentElement.dir = 'rtl';
        this.language = 'ar'
      }
      else{
        this.translate.use('en');
        this.doc.documentElement.dir = 'ltr';
        this.language = 'en'
      }

      this.updateSettings()
    }
  }

  updateSettings() {
    let user = JSON.parse(localStorage.getItem('userData'))
    user['settings'] = []
    user = {...user, 'dark-mode': this.mode, 'lang': this.language}
    console.log(user);
    
    localStorage.setItem('userData', JSON.stringify(user))
  }
}
