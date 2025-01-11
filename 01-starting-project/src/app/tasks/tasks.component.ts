import { Component, input, Input } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';
import { TaskComponent } from './task/task.component';
import { type User } from '../user/user.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { type EnteredTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  showAddTask = false;
  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user()?.id);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.showAddTask = true;
  }

  onCancelAddTask() {
    this.showAddTask = false;
  }

  onAddTask(enteredTask: EnteredTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: enteredTask.title,
      summary: enteredTask.summary,
      dueDate: enteredTask.date,
      userId: this.user().id,
    });
    this.showAddTask = false;
  }
}
