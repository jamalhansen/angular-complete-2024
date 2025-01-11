import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
