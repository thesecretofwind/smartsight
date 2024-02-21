import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[appUnless]'
})

export class UnlessDirective implements OnInit {
  // 这里类型同样会推断
  @Input() set appUnless(data: string) {
    console.log(data);

    this.viewContainerRef.clear();
    const embeddedview = this.templateRef.createEmbeddedView({
      $implicit: data
    });
    this.viewContainerRef.insert(embeddedview);
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}
  ngOnInit(): void {
    console.log(this.templateRef);
    console.log('=====');

    console.log(this.viewContainerRef);
    this.templateRef.createEmbeddedView(`<h1>hello world</h1>`)

    // createEmbeddedView第二参数是上下文，可以给个对象(new 一个对象或函数都可以的)
    this.viewContainerRef.createEmbeddedView(this.templateRef)
  }


}
