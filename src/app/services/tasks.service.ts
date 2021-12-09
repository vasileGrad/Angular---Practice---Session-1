import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  constructor() { }

  getTasks(): any {
    return tasks;
  }
}

const tasks = [
  {
    id: 0,
    name: "Listen more"
  },
  {
    id: 1,
    name: "Make your bed"
  },
  {
    id: 2,
    name: "Read a book"
  },
  {
    id: 3,
    name: "Buy some food"
  }
];