import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) {}
  url: any = null;
  dmyurl: any = 'https://www.w3schools.com/howto/img_avatar.png';
  imgurl: any = this.dmyurl;

  ngOnInit(): void {}

  countries = ['India', 'Pakistan', 'Bangaladesh', 'US'];
  profile_form: FormGroup = this.fb.group({
    // name: new FormControl('Tamil', [Validators.required]),
    profilephoto: new FormControl('', Validators.required),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phoneno: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    address: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  // this.profile_form.patchValue({sectionContent: this.section.address});
  save() {
    //this.profile_form.patchValue({ sectionContent: this.address });

    console.log('first name:' + this.profile_form.controls['firstname'].value);

    console.log('last name: ' + this.profile_form.controls['lastname'].value);
    console.log('email: ' + this.profile_form.controls['email'].value);
    console.log('gender: ' + this.profile_form.controls['gender'].value);
    console.log('phoneno: ' + this.profile_form.controls['phoneno'].value);
    console.log('country: ' + this.profile_form.controls['country'].value);
    console.log('address: ' + this.profile_form.controls['address'].value);
    console.log(
      'Profile photo:' + this.profile_form.controls['profilphoto'].value
    );
    // console.log(
    //   'profile photo url: ' + this.profile_form.controls['profilphoto'].value
    // );
  }
  selectFile(event: any) {
    // if (!event.target.files[0] || event.target.files[0].length == 0) {
    //   return;
    // }
    // let mimeType = event.target.files[0].type;
    // if (mimeType.match(/image\/*/) == null) {
    //   return;
    // }
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
      console.log('test', reader.result);
      this.imgurl = this.url == this.dmyurl ? this.dmyurl : reader.result;
      // this.profile_form.controls.profilephoto.setValue(this.imgurl);
      // console.log(
      //   'profile photo url: ' + this.profile_form.controls['profilphoto'].value
      // );
    };
  }

  // visibleornot() {
  //   if (this.url == null) {
  //     console.log('visible');
  //     return 'visible';
  //   } else {
  //     console.log('hidden');
  //     return 'hidden';
  //   }
  // }
}
