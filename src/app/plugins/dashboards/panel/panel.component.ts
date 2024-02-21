import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';
import { WidgetDragService } from 'src/app/services/widget.drag.service';
// interface Panel {
//   id: number | string;
//   columns: number;
//   height: string;
//   title: string;
// }
// const panels: Panel[][] = [
//   [{id: 1, columns: 12, height: '182px', title: 'widget1'}, {id: 2, columns: 12, height: '182px', title: 'widget2'}],
//   [{id: '', columns: 8, height: '360px',title: ''},{id: 4, columns: 8, height: '360px',title: 'widget4'},{id: 5, columns: 8, height: '360px', title: 'widget5'},],
// ]
interface Panel {
  id: number;
  columns: number
}
const panels: Panel[] = [
  {
    id: 1,
    columns: 8
  },
  {
    id: 2,
    columns: 8
  },
  {
    id: 3,
    columns: 8
  },
  {
    id: 4,
    columns: 8
  },
  {
    id: 5,
    columns: 8
  },
  {
    id: 6,
    columns: 8
  }, {
    id: 7,
    columns: 8
  },  {
    id: 8,
    columns: 8
  },  {
    id: 9,
    columns: 8
  }
]

enum Direction{
  FORWARD,
  BACK
}


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less']
})
export class PanelComponent implements OnInit, AfterViewInit {

  panels = panels;
  widgetsPerRow = 3;
  direction = Direction.FORWARD;
  widgetWidth!: number;
  widgetHeight!: number;
  @ViewChild('panel') panelEle!: ElementRef
  @ViewChildren('widget') widgets = new QueryList<ElementRef<HTMLElement>>();
  optionWidgets!:ElementRef<HTMLElement>[];
  widgetPosition: { index: number; originIndex: number; }[] = [];
  constructor(private widgetDragService: WidgetDragService, private cd: ChangeDetectorRef, private renderer: Renderer2, private elementRef: ElementRef) { }


  ngAfterViewInit(): void {

    const element = this.elementRef.nativeElement.querySelector('.widget-wrapper') as HTMLElement;
    const { width, height} = element.getBoundingClientRect();
    this.widgetWidth = width;
    this.widgetHeight = height;
    this.optionWidgets = this.widgets.toArray();
    // this.widgetPosition = this.widgets.map((widget, index) => ({
    //   index,
    //   originIndex: index
    // }))
  }

  ngOnInit(): void {

    this.widgetDragService.subject.pipe(
      debounceTime(50),
      distinctUntilChanged((previous, current) => previous.startIndex === current.startIndex && previous.endIndex === current.endIndex)
    ).subscribe(data => {
      // console.log(data);
      console.log('changed', data);

      const {startIndex, endIndex} = data;
      this.direction = startIndex > endIndex ? Direction.BACK : Direction.FORWARD;
      const [startRow, startCol] = this.calPosition(startIndex);
      const [endRow, endCol] = this.calPosition(endIndex);

      const startWidget = this.optionWidgets[startIndex];

      const { translateX, translateY} = this.getElementTranslate(startWidget!.nativeElement);
      startWidget!.nativeElement.style.transform = `translate(${(endCol - startCol ) * this.widgetWidth + translateX}px, ${(endRow - startRow) * this.widgetHeight + translateY}px)`

      startWidget!.nativeElement.setAttribute('index', endIndex.toString());

      let startMoveIndex = Math.min(startIndex, endIndex);
      let maxMoveIndex = Math.max(startIndex, endIndex);

      while(startMoveIndex <= maxMoveIndex) {

        if (startMoveIndex === startIndex) {
          startMoveIndex++;

          continue;
        }
        const widget = this.optionWidgets[startMoveIndex];
        if (this.direction === Direction.FORWARD) {

          const [preRow, preCol] = this.calPosition(startMoveIndex);
          const [curRow, curCol] = this.calPosition(startMoveIndex - 1);
          const { translateX, translateY} = this.getElementTranslate(widget!.nativeElement);
          widget!.nativeElement.style.transform = `translate(${(curCol - preCol) * this.widgetWidth + translateX}px, ${(curRow - preRow) * this.widgetHeight + translateY}px)`;
          widget!.nativeElement.setAttribute('index', (startMoveIndex - 1).toString())
        } else {
          const [preRow, preCol] = this.calPosition(startMoveIndex);
          const [curRow, curCol] = this.calPosition(startMoveIndex + 1);
          const { translateX, translateY} = this.getElementTranslate(widget!.nativeElement);
          widget!.nativeElement.style.transform = `translate(${(curCol - preCol) * this.widgetWidth + translateX}px, ${(curRow - preRow) * this.widgetHeight + translateY}px)`
          widget!.nativeElement.setAttribute('index', (startMoveIndex + 1).toString())
        }

        startMoveIndex++;
      }
      console.log(this.optionWidgets);

      this.optionWidgets.splice(startIndex, 1);
      this.optionWidgets.splice(endIndex, 0, startWidget);
      console.log(this.optionWidgets);

    })
  }


  calPosition(index: number) {
    return [ index / this.widgetsPerRow >> 0, index % this.widgetsPerRow]
  }

  getElementTranslate(element: HTMLElement) {
    const transformValue = element.style.transform;

    const translateMatch = transformValue.match(/translate\(([^,]+),([^)]+)\)/);

    if (translateMatch) {
      const translateX = parseFloat(translateMatch[1]);
      const translateY = parseFloat(translateMatch[2]);
      return {translateX, translateY}
    }

    return {translateX: 0, translateY: 0}
  }

  trackByFn(index: number, item: Panel) {
    return item.id;
  }

}
