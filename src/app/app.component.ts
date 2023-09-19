import { Component, OnInit } from '@angular/core'
import { ThemeService, ThemeType } from './services/theme.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'my-si'

  currentTheme: ThemeType = 'default'

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.changeTheme(this.currentTheme)
  }

  changeTheme(theme: ThemeType) {
    this.currentTheme = theme
    this.themeService.changeTheme(this.currentTheme)
  }
}
