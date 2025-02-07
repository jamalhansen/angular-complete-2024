import { Component, input, Input } from '@angular/core';
import { TasksService } from './tasks.service';
import { type User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  showAddTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user().id);
  }

  onStartAddTask() {
    this.showAddTask = true;
  }

  onCloseAddTask() {
    this.showAddTask = false;
  }
}
