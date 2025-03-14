import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
    @Input() width: string = '333px';
    @Input() height: string = '247px';
    @Input() date: string = '';
    @Input() task: string = '';
    @Input() progress: number = 0;
    @Input() progressColor: string = '';

}
