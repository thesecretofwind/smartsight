import { NgModule } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';

const modules = [
  NzSelectModule,
  NzButtonModule
];



@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules]
})
export class ZorroModule { }
