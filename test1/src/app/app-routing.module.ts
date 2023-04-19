import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { AddUserComponent } from './menu/add-user/add-user.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { DeleteUserComponent } from './menu/delete-user/delete-user.component';
import { EditUserComponent } from './menu/edit-user/edit-user.component';
import { ListUsersComponent } from './menu/list-users/list-users.component';
import { ViewUserComponent } from './menu/view-user/view-user.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'adduser', component: AddUserComponent },
      { path: 'listusers', component: ListUsersComponent },
      { path: 'viewuser', component: ViewUserComponent },
      { path: 'deleteuser', component: DeleteUserComponent },
      { path: 'edituser', component: EditUserComponent },
    ],
  },
  { path: '', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'listuser', component: ListUsersComponent },
  { path: 'viewuser', component: ViewUserComponent },
  { path: 'deleteuser', component: DeleteUserComponent },
  { path: 'edituser', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponents = [
//   DashboardComponent,
//   AddUserComponent,
//   ListUsersComponent,
// ];
