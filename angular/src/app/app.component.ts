import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { TodoService } from './services/todo.service';
import { ToDo } from './models/todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  public newTodo: ToDo = new ToDo();
  todoList: ToDo[];
  editTodos: ToDo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getToDos().subscribe(todos => {
      this.todoList = todos;
    });
  }

  create() {
    this.todoService.createTodo(this.newTodo)
      .subscribe((res) => {
        this.todoList.push(res.data);
        this.newTodo = new ToDo();
      });
  }
  dblClickEditTodo(todo: ToDo) {
    if (this.todoList.includes(todo) && todo.status !== 'Done') {
      if (!this.editTodos.includes(todo)) {
        this.editTodos.push(todo);
      }
    }
  }
  editTodo(todo: ToDo) {
    if (this.todoList.includes(todo) && todo.status !== 'Done') {
      if (!this.editTodos.includes(todo)) {
        this.editTodos.push(todo);
      } else {
        this.editTodos.splice(this.editTodos.indexOf(todo), 1);
        this.todoService.editTodo(todo).subscribe(res => {
          console.log('Update Succesful');
        }, err => {
          this.editTodo(todo);
          console.error('Update Unsuccesful');
        });
      }
    }
  }

  doneTodo(todo: ToDo) {
    if (this.editTodos.includes(todo)) {
      this.editTodos.splice(this.editTodos.indexOf(todo), 1);
    } else {
      todo.status = 'Done';
    }
    this.todoService.editTodo(todo).subscribe(res => {
      console.log('Update Succesful');
    }, err => {
      this.editTodo(todo);
      console.error('Update Unsuccesful');
    });
  }
  // checks if the todo sent is done
  isDone(todo: ToDo): boolean {
    if (todo.status === 'Done') {
      return true;
    }
    return false;
  }
  submitTodo(event, todo: ToDo) {
    if (event.keyCode === 13) {
      if (this.todoList.includes(todo)) {
        if (!this.editTodos.includes(todo)) {
          this.editTodos.push(todo);
        } else {
          this.editTodos.splice(this.editTodos.indexOf(todo), 1);
          this.todoService.editTodo(todo).subscribe(res => {
            console.log('Update Succesful');
          }, err => {
            this.editTodo(todo);
            console.error('Update Unsuccesful');
          });
        }
      }
    }
  }

  deleteTodo(todo: ToDo) {
    this.todoService.deleteTodo(todo._id).subscribe(res => {
      this.todoList.splice(this.todoList.indexOf(todo), 1);
    });
  }
}
