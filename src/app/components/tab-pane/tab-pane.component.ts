import { animate, keyframes, state, style, transition, trigger } from '@angular/animations'
import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-tab-pane',
  templateUrl: './tab-pane.component.html',
  styleUrls: ['./tab-pane.component.less'],
  animations: [
    trigger('slideAnimation', [
      // state('void', style({ opacity: 0})),
      // state('*', style({ opacity: 1 })),
      // transition( ':enter', [
      //   style({transform: 'translateX({{offsetEnter}}%)', color: 'red'}),
      //   animate("300ms ease-out")
      // ]),
      // transition(':leave', [
      //   animate('300ms ease-out', style({transform: 'translateX({{offsetLeave}}%)', color: 'green'}))
      // ]),
      state(
        'left',
        style({
          // backgroundColor: 'red'
        }),
      ),
      state('right', style({})),
      transition('left => right', [
        animate(
          '3s',
          keyframes([
            style({ transform: 'translateX(-100%)', opacity: 0,color: 'red' }),
            style({ transform: 'translateX(100%)', opacity: 1, color: 'green' }),
          ]),
        ),
      ]),
      transition('right => left', [
        animate(
          '3s',
          keyframes([
            style({ transform: 'translateX(100%)', opacity: 0,color: 'yellow' }),
            style({ transform: 'translateX(-100%)', opacity: 1, color:'blue' }),
          ]),
        ),
      ]),
    ]),
  ],
})
export class TabPaneComponent implements OnInit {
  @Input() tabTitle: string = ''
  @Input() direction: 'left' | 'right' = 'left'
  @Input() nextDirection: 'left' | 'right' = 'right'

  @HostBinding('class.active') active: boolean = false
  @HostBinding('class.inactive') inactive: boolean = true
  state = 'left'

  @HostBinding('@slideAnimation')
  public get slideAnimation() {
    return `${this.direction}`
  }
  constructor(public el: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.state = 'right'
    }, 5000)
  }
}
