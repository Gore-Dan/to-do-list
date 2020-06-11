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

  add(todoElement: ToDoListClass) {
    if (!todoElement.id) {
      todoElement.id = ++this.currentId;
    }
    this.toDoArray.push(todoElement);
   }

  
  deleteById(id: number) {
    this.toDoArray = this.toDoArray
      .filter(element => element.id !== id);
    
  }

  listCompleted(toDoElement: ToDoListClass){
    let updated = this.updateById(toDoElement.id, {
      completed: !toDoElement.completed
    });
    return updated;
  }

  updateById(id: number, value: Object = {}) { 
    let toDoElement = this.getById(id);

    Object.assign(toDoElement, value);
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
