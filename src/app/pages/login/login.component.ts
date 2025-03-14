import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private navigationService: NavigationService){
  }
  navigateTo(url: string) {
    this.navigationService.navigateTo(url);
  }
}
