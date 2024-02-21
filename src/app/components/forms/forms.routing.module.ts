import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';

import { FamilyContactComponent } from './family-contact/family-contact.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // component: FamilyContactComponent
    redirectTo: 'family'
  },
  {
    path: 'family',
    component: FamilyContactComponent
  },
  {
    path: 'tab',
    // component: TabsComponent
    loadComponent: () => TabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
