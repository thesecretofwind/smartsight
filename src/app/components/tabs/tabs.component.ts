import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core'
import { TabPaneComponent } from '../tab-pane/tab-pane.component'

enum Direction {
  LEFT_TO_RIGHT,
  RIGHT_TO_LEFT,
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
})
export class TabsComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChildren(TabPaneComponent) tabPanes: QueryList<TabPaneComponent> = new QueryList<TabPaneComponent>()

  @ViewChild('a') A!: ElementRef;
  @ViewChildren('tabLabel') tabLabels!: QueryList<ElementRef>
  @Input() selectedIndex: number = 0
  @Output() selectedIndexChanged = new EventEmitter<number>()
  // @Output()
  lineLeft: number = 0
  lineWidth: number = 0

  get lineStyle() {
    return {
      width: `${this.lineWidth}px`,
      transform: `translateX(${this.lineLeft}px)`,
    }
  }
  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.A);

    setTimeout(() => {
      const tabs = this.tabPanes.toArray()
      const activeTab = tabs[this.selectedIndex]
      if (activeTab) {
        this.selectTab(activeTab, this.selectedIndex)
      }
    }, 0)

    this.moveLine()
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // if (this.selectedIndex) {
    // console.log(this.tabPanes.toArray());
    // const tabs = this.tabPanes.toArray();
    // const activeTab = tabs.length && tabs[this.selectedIndex];
    // this.selectTab(, this.selectedIndex);
    // }
    // const activeTabs = this.tabPanes.filter(tab => tab.active);
    // if (activeTabs.length === 0) {
    //   this.selectTab(this.tabPanes.first, 0);
    // }
  }

  selectTab(tab: TabPaneComponent, index: number) {
    console.log(this.selectedIndex, index);
    // this.selectedIndex > index => 从右到左
    // index > this.selectedIndex => 从左到右

    const tabs = this.tabPanes.toArray();
    const direction = index >= this.selectedIndex ? Direction.LEFT_TO_RIGHT : Direction.RIGHT_TO_LEFT;
    console.log('更新前：',tabs.map(tab => tab.direction));

    // const splitIndex = Math.min(index, this.selectedIndex);

    for (let i = 0; i < tabs.length; i++) {
      if (i <= index && direction === Direction.LEFT_TO_RIGHT) {
        tabs[i].direction = 'right';
      } else {
        tabs[i].direction = 'left';
      }
    }
    tabs[this.selectedIndex].direction = direction === Direction.LEFT_TO_RIGHT ? 'left' : 'right'

    tab.direction =  direction ===  Direction.LEFT_TO_RIGHT ? 'right' : 'left'
    this.selectedIndex = index;
    console.log('更新后：', tabs.map(tab => tab.direction));
    this.tabPanes.toArray().forEach((tab, i) => {
      tab.active = index === i
    })
    this.moveLine()
  }

  public moveLine() {
    const tabLabelElements = this.tabLabels.toArray()
    if (tabLabelElements[this.selectedIndex]) {
      const activeTab = tabLabelElements[this.selectedIndex].nativeElement
      this.lineWidth = activeTab.offsetWidth
      this.lineLeft = activeTab.offsetLeft
    }
  }
}
