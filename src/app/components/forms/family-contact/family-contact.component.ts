import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-family-contact',
  templateUrl: './family-contact.component.html',
  styleUrls: ['./family-contact.component.less'],
})
export class FamilyContactComponent implements OnInit {
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  formGroup = this.fb.group({
    username: [],
    phone: [],
    myMultiSelect: [[]]
    // firstContact: this.fb.group({
    //   username: [],
    //   relation: ['朋友'],
    //   phone: []
    // }),
    // secondContact: this.fb.group({
    //   username: [],
    //   relation: ['朋友'],
    //   phone: []
    // }),
    // thirdContact: this.fb.group({
    //   username: [],
    //   relation: ['朋友'],
    //   phone: []
    // }),
  })

  form = this.fb.group({
    userName: [2505, [Validators.required, Validators.minLength(3)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.formGroup);

  }

  submit(form: FormGroup) {
    console.log(form);

  }
}
