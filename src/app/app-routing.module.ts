import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { TaskComponent } from './pages/task/task.component';
import { SliderComponent } from './component/slider/slider.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MessageComponent } from './pages/message/message.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
// import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  // {path:'',component:LandingComponent, data: { title: 'Landing Page', noHeader: true } },
  {path:'login',component:LoginComponent, data: { title: 'Login', noHeader: true } },
  {path:'signup',component:SignupComponent, data: { title: 'Sign Up', noHeader: true } },
  {path:'dashboard',component:DashboardComponent, data: { title: 'Dashboard', noHeader: false } },
  {path:'home',component:HomeComponent, data: { title: 'Home', noHeader: false } },
  {path:'task',component:TaskComponent, data: { title: 'Task', noHeader: false } },
  {path:'task/createTask',component:CreateTaskComponent, data: { title: 'Create Task', hasBackButton: true, backUrl:'task', noHeader: false } },
  {path:'message',component:MessageComponent, data: { title: 'Message', noHeader: false } },
  {path:'settings',component:SettingsComponent, data: { title: 'Settings', noHeader: false } },
  {path:'input',component:InputComponent, data: { title: 'Home', noHeader: false } },
  {path:'card',component:TaskComponent, data: { title: 'Home', noHeader: false } },
  {path:'slider',component:SliderComponent, data: { title: 'Home', noHeader: false } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
