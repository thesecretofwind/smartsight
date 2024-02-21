import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FamilyContactComponent } from './family-contact/family-contact.component'
import { ZorroModule } from 'src/app/shared/zorro.module'
import { FormsRoutingModule } from './forms.routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ContactGroupComponent } from './contact-group/contact-group.component'
import { InputComponent } from './input/input.component'
import { FormcontrolnameInputComponent } from './formcontrolname-input/formcontrolname-input.component'
// import { TabComponent } from '../tab/tab.component';

import { NzIconModule } from 'ng-zorro-antd/icon'
import { icons } from 'src/app/shared/icon'
import { MyInputComponent } from './my-input/my-input.component'
import { InputDirective } from './my-input/Input.directive'
import { UnlessDirective } from './my-input/unless.directive'

@NgModule({
  declarations: [
    FamilyContactComponent,
    ContactGroupComponent,
    InputComponent,
    FormcontrolnameInputComponent,
    MyInputComponent,
    InputDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule.forChild(icons),
    ZorroModule,
    FormsRoutingModule,
  ],
})
export class MyFormsModule {}
