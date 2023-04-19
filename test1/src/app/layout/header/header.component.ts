import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  welcome: any;
  constructor(private localStorage: LocalService) {}

  ngOnInit(): void {
    this.welcome = localStorage.getItem('name');
    // console.log('welcome: ' + this.welcome);
  }
}
