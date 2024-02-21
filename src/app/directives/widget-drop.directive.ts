import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { WidgetDragService } from '../services/widget.drag.service';

@Directive({
  selector: '[appWidgetDrop]'
})
export class WidgetDropDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private widgetDragService: WidgetDragService) { }

  @HostListener('dragenter') dragEnter() {
    if (!this.widgetElement.classList.contains('widget-over')) {
      this.renderer.addClass(this.widgetElement, 'widget-over');
    }

    const element = this.elementRef.nativeElement as HTMLElement;

    const dragWidgetIndex = sessionStorage.getItem('dragIndex') || '';
    const dragOverWidgetIndex = element.getAttribute('index') || '';
    if (dragWidgetIndex == dragOverWidgetIndex) {
      return;
    }
    this.widgetDragService.subject.next({
      startIndex: +dragWidgetIndex,
      endIndex: +dragOverWidgetIndex
    })

    // console.log(element.getAttribute('dragIndex'), element.getAttribute('dropIndex'));


  }

  get widgetElement() {
    const element = this.elementRef.nativeElement as HTMLElement;
    const targetElement = element.querySelector('.widget') as HTMLElement;
    return targetElement;
  }

  getDragWidgetIndex(event: DragEvent) {
    return event.dataTransfer?.getData('data');
  }

  @HostListener('dragover', ['$event']) dragOver(event: DragEvent) {
    event.preventDefault();
    // console.log('hover');
    const element = this.elementRef.nativeElement as HTMLElement;

    // console.log(dragWidgetIndex, dragOverWidgetIndex);


    if (!this.widgetElement.classList.contains('widget-over')) {
      this.renderer.addClass(this.widgetElement, 'widget-over');
    }
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
  }

  @HostListener('dragleave', ['$event'])
  dragLeave(event: DragEvent) {
    event.preventDefault();
    this.renderer.removeClass(this.widgetElement, 'widget-over')
  }

  @HostListener('drop', ['$event'])
  dragDrop(event: DragEvent) {
    // event.preventDefault();
    // event.stopPropagation();
   const a =  event.dataTransfer?.getData('data');
   console.log('drop', a);


    // if (!event.dataTransfer) {
    //   return;
    // }
    // const widgetData = JSON.parse(event.dataTransfer.getData('data'));
    // const hasIndex = Object.keys(widgetData).every(item => item !== '');
    // if (!hasIndex) {
    //   return;
    // }

    // const element = event.target as HTMLElement;
    // const dropRowIndex = element.getAttribute('rowIndex');
    // const dropColIndex = element.getAttribute('colIndex');

    // this.widgetDragService.subject.next({
    //   dragRowIndex: widgetData.rowIndex,
    //   dragColIndex: widgetData.colIndex,
    //   dropRowIndex: dropRowIndex as string,
    //   dropColIndex: dropColIndex as string
    // })

    // const currElement = this.elementRef.nativeElement;
    // this.renderer.removeClass(currElement, 'widget-over');
  }

}
