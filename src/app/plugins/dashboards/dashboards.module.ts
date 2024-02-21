import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards.routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { icons } from 'src/app/shared/icon';
import { ZorroModule } from 'src/app/shared/zorro.module';

import { PanelComponent } from './panel/panel.component';
import { WidgetComponent } from './widget/widget.component';
import { ContextComponent } from './context/context.component';
import { WidgetDraggableDirective } from 'src/app/directives/widget-draggable.directive';
import { WidgetDropDirective } from 'src/app/directives/widget-drop.directive';

@NgModule({
  declarations: [
    PanelComponent,
    WidgetComponent,
    ContextComponent,
    WidgetDraggableDirective,
    WidgetDropDirective
  ],
  imports: [
    DashboardsRoutingModule,
    ZorroModule,
    NzIconModule.forChild(icons),
    CommonModule
  ]
})
export class DashboardsModule { }
