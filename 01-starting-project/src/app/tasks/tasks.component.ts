import { Component, input, Input } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';
import { TaskComponent } from './task/task.component';
import { type User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user()?.id);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
