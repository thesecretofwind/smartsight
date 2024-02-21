import { NgModule } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ZorroModule } from './shared/zorro.module';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CdkTreeModule} from '@angular/cdk/tree';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { icons } from './shared/icon';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabPaneComponent } from './components/tab-pane/tab-pane.component'
import { ChangeComponent } from './components/change.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component'



@NgModule({
  declarations: [AppComponent, TabsComponent, TabPaneComponent, ChangeComponent, TreeComponent, TreeNodeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ZorroModule,
    FormsModule,
    CdkTreeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
