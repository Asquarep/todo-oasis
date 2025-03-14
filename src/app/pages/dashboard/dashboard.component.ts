import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', 'dashboard.component.scss']
})
export class DashboardComponent {
  menu = false;

  constructor(private navigationService: NavigationService) {}
    navigateTo(url: string) {
      this.navigationService.navigateTo(url);
    }
}
