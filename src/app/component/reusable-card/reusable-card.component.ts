import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-card',
  templateUrl: './reusable-card.component.html',
  styleUrls: ['./reusable-card.component.css']
})
export class ReusableCardComponent {
  @Input() bg: string = '#FFFFFF';
  @Input() width: string = '300px';
  @Input() height: string = 'auto';
  @Input() title: string = '';
}
