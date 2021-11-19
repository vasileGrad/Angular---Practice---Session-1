import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { tasks } from 'src/app/tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks = tasks;
  newTask = new FormControl('');

  addTask = () => {
    if (this.newTask.value) {
      this.tasks.push({
        id: this.tasks.length > 0 ? this.tasks[this.tasks.length-1].id + 1 : 0,
        name: this.newTask.value
      });
      this.newTask.setValue("");
    }
  }

  deleteTask = (id: number) => {
    this.tasks.splice(this.tasks.findIndex(task => task.id === id), 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}