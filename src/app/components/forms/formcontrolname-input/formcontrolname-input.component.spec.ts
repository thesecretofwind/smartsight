import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontrolnameInputComponent } from './formcontrolname-input.component';

describe('FormcontrolnameInputComponent', () => {
  let component: FormcontrolnameInputComponent;
  let fixture: ComponentFixture<FormcontrolnameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcontrolnameInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcontrolnameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
