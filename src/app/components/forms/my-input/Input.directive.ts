import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewContainerRef } from "@angular/core";


@Directive({
  selector: '[appInput]',
  host: {
    '[class.my-input-disabled]': 'disabled'
  }
})

export class InputDirective implements OnInit{
  @Input() disabled = false;

  @Output() valueChange = new EventEmitter();
  constructor(private el: ElementRef, private render2: Renderer2,  private viewcontrinerRef: ViewContainerRef) {
    render2.addClass(this.el.nativeElement, 'my-input')


  }
  ngOnInit(): void {
    // console.log(this.templateRef);
    console.log(this.viewcontrinerRef, 'ss');
  }

  @HostListener('input')
  onInputChange() {

    const element = this.el.nativeElement;
    console.log(element.max);

    if (element.max && Number(element.value) >= Number(element.max)) {
      this.render2.setProperty(element, 'value', element.max);
      this.valueChange.emit(element.value);

    }
  }
}
