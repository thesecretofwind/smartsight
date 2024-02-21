import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWidgetDraggable]'
})
export class WidgetDraggableDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  get widgetElement() {
    const element = this.elementRef.nativeElement as HTMLElement;
    const targetElement = element.querySelector('.widget') as HTMLElement;
    return targetElement;
  }

  ngOnInit(): void {
    this.addDrag();
  }

  addDrag() {
    const element = this.elementRef.nativeElement as HTMLElement;
    element.setAttribute('draggable', 'true');
  }

  @HostListener('dragstart', ['$event'])
  dragStart(event: DragEvent) {
    console.log('aa', this.widgetElement);

    if (!this.widgetElement.classList.contains('widget-dragging')) {
      this.renderer.addClass(this.widgetElement, 'widget-dragging');
    }
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';


      const element = this.elementRef.nativeElement as HTMLElement;
      const index = element.getAttribute('index') || '2222';

      event.dataTransfer.setData('data', index);
      sessionStorage.setItem('dragIndex', index);
    }

  }

  @HostListener('dragend')
  dragEnd() {
    // const element = this.elementRef.nativeElement as HTMLElement;
    this.renderer.removeClass(this.widgetElement, 'widget-dragging')
  }

}
