import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { debounceTime, Subject } from 'rxjs'
// import { ITab } from './components/tab/type'
import { ThemeService, ThemeType } from './services/theme.service';

import './practice/a'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-si'

  currentTheme: ThemeType = 'default'
  public clickSubject = new Subject();
  inputControl = new FormControl('');
  form = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl('')
  })

  constructor(private themeService: ThemeService, private router: Router) {
    // 使用 debounceTime 来控制点击事件的频率
    this.clickSubject.pipe(
      debounceTime(300) // 设置防抖的时间间隔为 300ms
    ).subscribe(() => this.handleClick());
  }
  ngOnInit(): void {
    this.changeTheme(this.currentTheme)
    // this.router.navigate(['new-route'], {queryParams: {name: 'aa'}})
  }

  changeTheme(theme: ThemeType) {
    this.currentTheme = theme
    this.themeService.changeTheme(this.currentTheme)
  }

  handleClick() {
    console.log('触发了点击');

  }
}
