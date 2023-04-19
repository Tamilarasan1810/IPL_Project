import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss'],
})
export class Register2Component implements OnInit {
  public toggle: boolean = true;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  register2_form: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    mobileno: new FormControl('', Validators.required),
    otp: new FormControl('', Validators.required),
  });

  sendotp() {
    console.log('Name: ' + this.register2_form.controls['name'].value);
    console.log('Mobile no: ' + this.register2_form.controls['mobileno'].value);
    this.toggle = false;
  }
  submitotp() {}
}
