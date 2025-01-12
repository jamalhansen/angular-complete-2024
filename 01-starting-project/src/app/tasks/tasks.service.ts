import { Injectable } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';
import { type EnteredTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  addTask(enteredTask: EnteredTask) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: enteredTask.title,
      summary: enteredTask.summary,
      dueDate: enteredTask.date,
      userId: enteredTask.userId,
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
