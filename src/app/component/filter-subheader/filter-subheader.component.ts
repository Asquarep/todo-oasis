import { Component, Input } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-filter-subheader',
  templateUrl: './filter-subheader.component.html',
  styleUrls: ['./filter-subheader.component.css'],
})
export class FilterSubheaderComponent {
  constructor(private navigationService: NavigationService) {}
  navigateTo(url: string) {
    this.navigationService.navigateTo(url);
  }

  @Input() showAddButton: boolean = true;
}
