import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less']
})
export class WidgetComponent implements OnInit {

  // @Input() rowIndex!: number ;
  // @Input() colIndex!: number;
  @Input() id!: string | number;
  @Input() index!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
