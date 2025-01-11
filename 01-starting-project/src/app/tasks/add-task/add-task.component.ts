import { Component, EventEmitter, signal, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type EnteredTask } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule], //Forms module includes multiple helpers for forms and will automatically prevent browser default for form submission and redirects to ngSubmit event on form
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<EnteredTask>();

  //enteredTitle = signal('');  //you can use signal for two way binding, no change necessary to template
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
