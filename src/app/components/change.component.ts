import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-change',
  template: `
    <div>数字改变了-- {{number}}</div>
    <input type="text" #input />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeComponent implements OnInit {
  number = 0
  @ViewChild('input') input!: ElementRef;
  minLength = 3;
  currentInputValue = '';

  constructor(private changeDetectionRef: ChangeDetectorRef, private http: HttpClient) { }

  ngOnInit(): void {
    const inputEvent = fromEvent<InputEvent>(this.input.nativeElement, 'input');
    inputEvent.pipe(
      map((item: InputEvent) => (item.target as HTMLInputElement).value),
      filter(text => text.length > 2),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(searchTerm => this.http.get(`./api/endpoint/search?${searchTerm}`))


    )
    // setInterval(() => {

      // this.number++;
      // console.log(this.number);
      // setInterval 是一个异步操作，它会在每个设定的时间间隔后执行回调函数。Zone.js 会截获这个异步操作，并在 setInterval 回调执行完毕后，执行 Angular 的变更检测
      // 但在setInterval中已经把该组件及其父组件标记为脏了，因此在回调结束后会执行变更检测，更新视图(和changeDetectionRef.detectChanges更新视图时机相差不大)
      // this.changeDetectionRef.markForCheck();
      // this.changeDetectionRef.detectChanges()

    // }, 1000)
    }

}
