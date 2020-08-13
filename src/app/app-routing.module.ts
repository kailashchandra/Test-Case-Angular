import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRouteAuthGuard } from './AuthGuards/employeeRoute.components';

const routes: Routes = [{
  path: '',
  redirectTo: 'userMangement',
  pathMatch: 'full'
},
{
  path: 'userMangement',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: DashboardComponent,
  children : [{
    path: 'home',
    component: HomeComponent
},{
    path : 'userList',
    component: EmployeeComponent,
    canActivate  : [EmployeeRouteAuthGuard]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
