import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MenuServiceModule } from '../menu/menu-service.module';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    Register2Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MenuServiceModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    Register2Component,
  ],
})
export class LayoutModule {}
