import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {
  @Input() errorTip = '';
  @Input() label: string = '';
  @Input() myControl!: FormControl;
  @Input() placeholder = '';


  constructor() { }

  ngOnInit(): void {
  }

}
