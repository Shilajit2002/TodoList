import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // Input is Todo List
  @Input() todo: Todo = new Todo();
  @Input() i: any;
  // Output is Event Emitter Todo List
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  //  onClick Function for Emitting the perticular Todo
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    // console.log('On Click has been triggred');
  }

  // onCheckbox funtion for Mark the Todo
  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }
}
