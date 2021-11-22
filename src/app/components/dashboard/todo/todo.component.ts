import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { tasks } from 'src/app/tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks = tasks;
  taskForm = this.formBuilder.group({
    taskName: ''
  });

  addTask = () => {
    if (this.taskForm.value.taskName) {
      this.tasks.push({
        id: this.tasks.length > 0 ? this.tasks[this.tasks.length-1].id + 1 : 0,
        name: this.taskForm.value.taskName
      });
      this.taskForm.reset();
    }
  }

  deleteTask = (id: number) => {
    this.tasks.splice(this.tasks.findIndex(task => task.id === id), 1);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}