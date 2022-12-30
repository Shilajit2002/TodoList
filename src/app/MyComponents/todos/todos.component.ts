import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // Create a Object reference of Todo Array
  todos: Todo[];
  localItem: any;

  // Initialize the array in constructor
  constructor() {
    this.localItem = localStorage.getItem('todos');

    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {}

  // Delete Todo List Function
  deleteTodo(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // Add Todo List Function
  addTodo(todo: Todo) {
    // console.log(todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  // Add Todo List Function
  toggleTodo(todo: Todo) {
    // console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
