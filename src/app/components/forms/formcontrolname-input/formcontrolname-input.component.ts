import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formcontrolname-input',
  templateUrl: './formcontrolname-input.component.html',
  styleUrls: ['./formcontrolname-input.component.less'],
})
export class FormcontrolnameInputComponent implements OnInit {
  @Input() controlName!: string;
  @Input() placeholder = '';
  constructor() { }


  ngOnInit(): void {
  }


}
