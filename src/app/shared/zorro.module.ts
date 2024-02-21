import { NgModule } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';


const modules = [
  NzSelectModule,
  NzButtonModule,
  NzFormModule,
  NzInputModule,
  NzGridModule,
  NzLayoutModule,
  NzBreadCrumbModule,
  NzMenuModule,
];



@NgModule({
  declarations: [],
  imports: [modules],
  exports: [modules]
})
export class ZorroModule { }
