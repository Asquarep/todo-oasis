import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input() progress: number = 0; // Accepts progress value
  @Input() color: string = '#546FFF'; // Accepts progress value
}