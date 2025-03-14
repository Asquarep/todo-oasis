import { Component, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() hasBackButton = false;
  @Input() backUrl: string = '';

  constructor(private navigationService: NavigationService) {}
  navigateTo(url: string) {
    this.navigationService.navigateTo(url);
  }

  goBack(){
    this.navigationService.goBack();
  }
}
