import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import Task from 'app/task/task.model';

@Component( {
    selector: 'task-input',
    templateUrl: './task-input.component.html'
})

export class TaskInputComponent implements OnInit {
    private task: Task = new Task;    
    @Output() addTask: EventEmitter<Task> = new EventEmitter();
    public isEditMode: boolean = false;
    private buttonName: string;
   

    constructor() { }

    ngOnInit(): void {
        this.task.author = "sgsgsgsg";  // for test
        //this.addTask = new EventEmitter();
        this.updateButtonName();
    }

    add(): void {
        this.addTask.emit(this.task);
        this.task = new Task();
        this.isEditMode = false;
        this.updateButtonName();
    }

    initFields(task: Task, isEditMode: boolean = false) {
        this.isEditMode = isEditMode;
        if(this.isEditMode) {
            this.task = task;
        }
        this.updateButtonName();
    }

    private updateButtonName(){
        this.buttonName = this.isEditMode ? "Ok" : "Add";
    }
}

