import { Component, input, Input } from '@angular/core';
import { dummyTasks } from '../../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input<string>();
  @Input() name?: string;

  tasks = dummyTasks.filter((task) => task.userId === this.userId());
}
