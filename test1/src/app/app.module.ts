import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './layout/login/login.component';
import { MainComponent } from './layout/main/main.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { ListUsersComponent } from './menu/list-users/list-users.component';
import { ViewUserComponent } from './menu/view-user/view-user.component';
import { DeleteUserComponent } from './menu/delete-user/delete-user.component';
import { AddUserComponent } from './menu/add-user/add-user.component';
import { EditUserComponent } from './menu/edit-user/edit-user.component';
import { MenuServiceModule } from './menu/menu-service.module';

@NgModule({
  declarations: [
    AppComponent,
    // DashboardComponent,
    // ListUsersComponent,
    // ViewUserComponent,
    // DeleteUserComponent,
    // AddUserComponent,
    // EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    MenuServiceModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    // jj

    // RouterModule.forRoot([
    //   { path: '', component: LoginComponent },
    //   { path: 'main', component: MainComponent },
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
