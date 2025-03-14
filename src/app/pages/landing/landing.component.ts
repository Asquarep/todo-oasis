import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css', './landing.component.scss']
})
export class LandingComponent {
  constructor(private navigationService: NavigationService) {}
    navigateTo(url: string) {
      this.navigationService.navigateTo(url);
    }
}
