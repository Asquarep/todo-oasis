import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { FormdesignComponent } from './component/formdesign/formdesign.component';
import { AssociateComponent } from './component/associate/associate.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
// import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  // {path:'',component:LandingComponent, data: { title: 'Landing Page', noHeader: true } },
  {path:'login',component:LoginComponent, data: { title: 'Login', noHeader: true } },
  {path:'signup',component:SignupComponent, data: { title: 'Sign Up', noHeader: true } },
  {path:'dashboard',component:DashboardComponent, data: { title: 'Dashboard' } },
  {path:'home',component:HomeComponent, data: { title: 'Home' } },
  {path:'task',component:CardComponent, data: { title: 'Task' } },
  {path:'autocomplete',component:AutocompleteComponent, data: { title: 'Auto Complete' } },
  {path:'input',component:InputComponent, data: { title: 'Home' } },
  {path:'card',component:CardComponent, data: { title: 'Home' } },
  {path:'slider',component:SliderComponent, data: { title: 'Home' } },
  {path:'table',component:TableComponent, data: { title: 'Home' } },
  {path:'form',component:FormdesignComponent, data: { title: 'Home' } },
  {path:'associate',component:AssociateComponent, data: { title: 'Home' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
