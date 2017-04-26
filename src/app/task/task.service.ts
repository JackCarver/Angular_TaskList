import { Injectable } from '@angular/core';

import Task from "app/task/task.model";
import { DataService } from "app/task/data.service";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
    private tasks: Task[] = [];

    constructor(private dataService: DataService) { }

    getAll(): Promise<Task[]> {
        return this.dataService.Tasks()
            .then(data => this.tasks = data);
    }

    Add(task: Task): void {
        // todo: add check
        let index = Math.max.apply(Math, this.tasks.map( obj => obj.id))
        task.id = ++index;
        this.tasks.push(task);  
    }

    remove(task: Task): void {
        let index = this.tasks.findIndex(fItem => fItem.id == task.id);
        if(index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    changeStatus(task: Task): void {
        // don't work because we should notify task list that property into object into collection was changed
        let index = this.tasks.findIndex(fItem => fItem.id == task.id);
        if(index !== -1) {
            this.tasks[index].done != this.tasks[index].done;
        }
    }

    edit(newTask: Task, oldTask: Task) {
        // todo: add check
        this.remove(oldTask);
        this.Add(newTask);
    }
}