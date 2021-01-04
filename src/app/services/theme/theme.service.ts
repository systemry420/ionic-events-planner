import { Injectable, Renderer2, RendererFactory2  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  setMode(value) {
    if(value) {
      localStorage.setItem('dark-mode', 'true')
      this.renderer.setAttribute(document.body, 'color-theme', 'dark')
    } else {
      localStorage.setItem('dark-mode', 'false')
      this.renderer.setAttribute(document.body, 'color-theme', 'light')
    }
  }
}
