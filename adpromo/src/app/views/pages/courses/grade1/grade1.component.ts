import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-grade1',
  templateUrl: './grade1.component.html',
  styleUrls: ['./grade1.component.scss'],
})
export class Grade1Component implements OnInit {
  constructor(private router: Router) {}
  url: any;
  ngOnInit(): void {}
  gotochapter(): void {
    this.url = ['chapter'];
    this.router.navigateByUrl('/courses/chapter');
  }
}
