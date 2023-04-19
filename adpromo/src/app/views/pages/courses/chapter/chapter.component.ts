import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationSymbol } from 'angular-archwizard';
@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss'],
})
export class ChapterComponent implements OnInit {
  constructor(private router: Router) {}
  url: any;
  ngOnInit(): void {}
  gotounit(path: any) {
    this.url = 'courses/' + path;
    this.router.navigateByUrl(this.url);
  }
}
