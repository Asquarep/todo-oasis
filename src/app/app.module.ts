import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './component/home/home.component';
import { TaskComponent } from './pages/task/task.component';
import { SliderComponent } from './component/slider/slider.component';
import { TableComponent } from './component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './component/popup/popup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './component/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { MessageComponent } from './pages/message/message.component';
import { ReusableCardComponent } from './component/reusable-card/reusable-card.component';
import { LogoComponent } from './component/logo/logo.component';
import { TaskCardComponent } from './component/task-card/task-card.component';
import { FilterSubheaderComponent } from './component/filter-subheader/filter-subheader.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MenubarComponent,
    HomeComponent,
    TaskComponent,
    SliderComponent,
    TableComponent,
    PopupComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    LandingComponent,
    SettingsComponent,
    MessageComponent,
    ReusableCardComponent,
    LogoComponent,
    TaskCardComponent,
    FilterSubheaderComponent,
    CreateTaskComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
