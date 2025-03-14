import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NavigationService } from 'src/app/services/navigation.service';

interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}
  navigateTo(url: string) {
    this.navigationService.navigateTo(url);
  }

  todo: Task[] = [];
  ongoing: Task[] = [];
  completed: Task[] = [];

  saveGlobally() {
    localStorage.setItem('todoTasks', JSON.stringify(this.todo));
    localStorage.setItem('ongoingTasks', JSON.stringify(this.ongoing));
    localStorage.setItem('completedTasks', JSON.stringify(this.completed));
  }

  ngOnInit(): void {
    this.todo = JSON.parse(localStorage.getItem('todoTasks') || '[]');
    this.ongoing = JSON.parse(localStorage.getItem('ongoingTasks') || '[]');
    this.completed = JSON.parse(localStorage.getItem('completedTasks') || '[]');
  }
  noTasks() {
    return (
      this.todo.length === 0 &&
      this.ongoing.length === 0 &&
      this.completed.length === 0
    );
  }
  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.saveGlobally();
  }
}
