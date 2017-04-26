import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';

import Task from 'app/task/task.model';
import { TaskService } from "app/task/task.service";
import { TaskInputComponent } from "app/task-input/task-input.component";

@Component( {
    selector: 'tasks-widget',
    templateUrl: './tasks-widget.component.html'
})

export class TaskWidgetComponent implements OnInit {
    tasks: Task[];
    previousTask: Task;
    @ViewChild('taskInput') taskInput: TaskInputComponent;

    constructor(private taskService: TaskService
    ) {
    }

    ngOnInit(): void {
    }

    addTask(task: Task): void {
        if(this.previousTask) {
            this.taskService.edit(task, this.previousTask);
            this.previousTask = undefined;
        }
        else {
            this.taskService.Add(task);
        }
        
    }

    onEdit(task: Task): void {
        this.previousTask = Object.assign({}, task);
        this.taskInput.initFields(Object.assign({}, task), true);

    }
}