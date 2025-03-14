import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {
  taskTitle: string = '';
  taskDescription: string = '';

  constructor(private navigationService: NavigationService) {}


  addTask() {
    if (!this.taskTitle.trim() || !this.taskDescription.trim()) return;    

    let todoTasks = JSON.parse(localStorage.getItem('todoTasks') || '[]');

    todoTasks.push({ title: this.taskTitle, description: this.taskDescription, date:"June 23, 2025", image:"https://tse1.mm.bing.net/th?id=OIP.99iB30OaymYQJZJbDhpYgwHaE7&w=315&h=315&c=7" });

    localStorage.setItem('todoTasks', JSON.stringify(todoTasks));

    this.taskTitle = ''; 
    this.taskDescription = ''; 
    this.navigationService.navigateTo('task');
  }
}
