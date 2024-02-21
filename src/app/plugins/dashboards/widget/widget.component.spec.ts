import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input id should be render', () => {
    const id = 44;
    component.id = id;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const spanElements = compiled.querySelectorAll('span');
    const lastSpanElements = spanElements[spanElements.length - 1];

    expect(lastSpanElements.textContent).toContain(id);
  })


});
