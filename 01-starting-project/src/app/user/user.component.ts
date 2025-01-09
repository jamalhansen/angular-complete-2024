import {
  Component,
  Input,
  Output,
  input,
  output,
  computed,
  EventEmitter,
} from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // or
  // @Input({required: true}) user!: User;

  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();
  // or
  user = input.required<User>();
  selected = input.required<boolean>();

  // @Output() select = new EventEmitter<string>();
  // or
  select = output<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  // or
  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
