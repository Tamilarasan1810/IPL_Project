import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  constructor(
    private fb: FormBuilder,
    private localStorage: LocalService,
    private router: Router
  ) {}
  loginForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  Name: any;
  Email: any;
  Password: any;
  temp: any = '';
  login_user(path: string) {
    this.Name = this.loginForm.controls['name'].value;
    this.Email = this.loginForm.controls['email'].value;
    this.Password = this.loginForm.controls['password'].value;
    this.localStorage.saveData('name', this.Name);
    //console.log(this.Name);

    this.temp = this.localStorage.getData('name');
    console.log(this.temp);
    this.router.navigate([path]);
  }
}
