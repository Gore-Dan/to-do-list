import { Component, OnInit } from '@angular/core';
import { ToDoListClass } from './todo';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  TodoObject: ToDoListClass = new ToDoListClass();

  constructor(private todoService: ToDoService) {
  }

  add() {
    this.todoService.add(this.TodoObject);
    this.TodoObject = new ToDoListClass();
    
  }

  remove(todo) {
    this.todoService.deleteById(todo.id);
  }

  listComplete(todoElement) {
    this.todoService.listCompleted(todoElement);
  } 

  get todoArray() {
    return this.todoService.getAll();
  }

  ngOnInit(): void {
  }

}
