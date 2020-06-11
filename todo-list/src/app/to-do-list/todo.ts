export class ToDoListClass{
    
  id: number;
  text: string = '';
  completed: boolean = false;

  constructor(value: Object = {}) {
    Object.assign(this, value);
  }
}