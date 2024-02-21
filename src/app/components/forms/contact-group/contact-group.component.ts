import { Component, inject, Input, OnInit } from '@angular/core'
import { ControlContainer, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-contact-group',
  templateUrl: './contact-group.component.html',
  styleUrls: ['./contact-group.component.less'],
  // providers: [
  //   {
  //       provide: ControlContainer,
  //       useFactory: () => inject(ControlContainer, { skipSelf: true })
  //   }
  // ],
  viewProviders: [
    { provide: ControlContainer, useFactory: () => inject(ControlContainer, { skipSelf: true }) },
  ],
})
export class ContactGroupComponent implements OnInit {
  @Input() legend!: string
  @Input() groupName!: string
  // controlContainer = inject(ControlContainer);
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    const parentFormGroup = this.controlContainer.control as FormGroup

    parentFormGroup.addControl(
      this.groupName,
      new FormGroup({
        username: new FormControl(''),
        relation: new FormControl('朋友'),
        phone: new FormControl(''),
      }),
    )

    parentFormGroup.valueChanges.subscribe((values) => {
      console.log(values)
    })
  }

  getControl(name: string) {
    const form = this.controlContainer.control
    return form?.get(`${this.groupName}.${name}`) as FormControl
  }
}
