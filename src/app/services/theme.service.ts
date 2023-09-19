import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

const theme = ['orange', 'dark', 'default'] as const;
export type ThemeType = typeof theme[number];

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme:ThemeType = 'orange';
  subject = new Subject<ThemeType>();


  constructor() {}

  changeTheme(changedTheme: ThemeType) {
    this.theme = changedTheme;
    this.loadTheme(changedTheme);
  }


  loadTheme(theme: ThemeType) { // 加载主题
    const id = 'lazy-load-theme';
    const link = document.getElementById(id);
    // 第一次切换，新建一个link元素
    if (!link) {
      const linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'stylesheet');
      linkElement.setAttribute('type', 'text/css');
      linkElement.setAttribute('id', id);
      linkElement.setAttribute('href', `${theme}.css`);
      document.head.appendChild(linkElement)
    } else {
      // 替换link源的的href地址
      (link as HTMLLinkElement).href = `${theme}.css`;
    }
  }


}
