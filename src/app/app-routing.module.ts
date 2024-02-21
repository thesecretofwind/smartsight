import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'contact',
    loadChildren:() => import('./components/forms/forms.module').then(m => m.MyFormsModule)
  },
  {
    path: 'dashboards',
    loadChildren: () => import('./plugins/dashboards/dashboards.module').then(m => m.DashboardsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
