import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  register_form: FormGroup = this.fb.group({
    // name: new FormControl('Tamil', [Validators.required]),

    phoneno: new FormControl('', [Validators.required]),
    otp: new FormControl('', [Validators.required]),
  });

  onRegister(e: Event) {
    e.preventDefault();
    localStorage.setItem('isLoggedin', 'true');
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/']);
    }
  }
}
