import { ToDoListClass } from './../to-do-list/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDoArray:ToDoListClass[];
  currentId: number;

  constructor() { 
    this.toDoArray = [];
    this.currentId = 0;
  }

  add(todoElement: ToDoListClass): ToDoService {
    if (!todoElement.id) {
      todoElement.id = ++this.currentId;
    }
    this.toDoArray.push(todoElement);
    return this;
  }

  
  deleteById(id: number): ToDoService {
    this.toDoArray = this.toDoArray
      .filter(element => element.id !== id);
    return this;
  }

   updateById(id: number, value: Object = {}): ToDoListClass { 
    let toDoElement = this.getById(id);

    Object.assign(toDoElement, value);
    return toDoElement;
  }

  listCompleted(toDoElement: ToDoListClass){
    let updated = this.updateById(toDoElement.id, {
      completed: !toDoElement.completed
    });

    return updated;
  }

  getAll(): ToDoListClass[] {
    return this.toDoArray;
  }

  
  getById(id: number): ToDoListClass {
    return this.toDoArray
      .filter(element => element.id === id)
      .pop();
  }
}
