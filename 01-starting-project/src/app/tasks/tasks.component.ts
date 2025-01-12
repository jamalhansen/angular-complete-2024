import { Component, input, Input } from '@angular/core';
import { TasksService } from './tasks.service';
import { TaskComponent } from './task/task.component';
import { type User } from '../user/user.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { CardComponent } from '../shared/card/card.component';
import { EnteredTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent, CardComponent],
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
