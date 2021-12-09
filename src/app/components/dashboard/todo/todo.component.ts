import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tasks: any = [];
  taskForm = this.formBuilder.group({
    taskName: ''
  });

  constructor(private formBuilder: FormBuilder, private tasksService: TasksService) { }

  ngOnInit(): void {
    this.getTasksData();
  }

  getTasksData() {
    this.tasks = this.tasksService.getTasks();
  }

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
    this.tasks.splice(this.tasks.findIndex((task: any) => task.id === id), 1);
  }

}