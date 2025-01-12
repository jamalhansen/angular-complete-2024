import {
  Component,
  EventEmitter,
  signal,
  Output,
  inject,
  Input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type EnteredTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule], //Forms module includes multiple helpers for forms and will automatically prevent browser default for form submission and redirects to ngSubmit event on form
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  //enteredTitle = signal('');  //you can use signal for two way binding, no change necessary to template
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
      userId: this.userId,
    });
    this.close.emit();
  }
}
