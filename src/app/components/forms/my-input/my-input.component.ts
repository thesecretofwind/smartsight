import { AfterViewInit, Component, ElementRef, forwardRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

interface InConfig {
  token: string;
}
@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line no-use-before-define
      useExisting: forwardRef(() => MyInputComponent),
      multi: true
    }
  ]
})
export class MyInputComponent implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor {
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() type = 'text';

  @Input() maxLength:number|null = null;
  @Input() max:number|null = null;
  subject = new BehaviorSubject<InConfig>({token: ''});

  @ViewChild('inputElement') inputElement!: ElementRef;
  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef
  actualvalue: any;
  onChange: any = () => {};

  set value(data: any) {
    this.actualvalue = data;
    // 通知表单value更新
    this.onChange(data);
  }

  constructor(private render2: Renderer2, private viewContainerRef:ViewContainerRef) { }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // console.log(this.container)
    console.log(this.viewContainerRef.length);

    // for (let i = 0; i < this.viewContainerRef.length; i++) {
    //   const view = this.viewContainerRef.get(i);
    //   console.log(`View at index ${i}:`, view);
    // }

  }


  ngOnInit(): void {
    console.log(this.subject.value);
    // console.log(this.viewContainerRef);
    console.log('hhhhh');


  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    // Object.keys(changes).forEach(key => {
    //   const element = changes[key];
    //   if (element) {
    //     this.render2.setProperty(this.inputElement.nativeElement, key, element.currentValue)
    //   }
    // })
  }


  writeValue(data: any ): void {
    // throw new Error('Method not implemented.');
    this.value = data;
  }
  registerOnChange(fn: any): void {
    // 注册表单的value改变通知方法
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log(fn);

    // throw new Error('Method not implemented.');
  }

  modelChange(event: any) {
    console.log(event);

    this.value = event;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }



}
