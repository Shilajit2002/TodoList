import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  title: string | undefined;
  desc: string | undefined;
  time = 'AM';

  // Output is Event Emitter Todo List
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const date = new Date();
    if (
      this.title == null ||
      this.title.trim() == '' ||
      this.desc == null ||
      this.desc.trim() == ''
    ) {
      alert('Please fill the form');
    } else {
      if (date.getHours() > 12) {
        this.time = 'PM';
      } else if (date.getHours() == 0) {
        this.time = 'AM';
      }
      const todo = {
        title: this.title,
        desc: this.desc,
        active: true,
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(),
        hour: date.getHours(),
        min: date.getMinutes(),
        sec: date.getSeconds(),
        time: this.time,
      };
      this.todoAdd.emit(todo);

      this.title = '';
      this.desc = '';
    }
  }
}
