import {
  Component,
  Input,
  Output,
  input,
  output,
  computed,
  EventEmitter,
} from '@angular/core';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

export interface User {
  id: string;
  name: string;
  avatar: string;
}

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
