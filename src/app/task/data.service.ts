import { Injectable } from '@angular/core';

import Task from "app/task/task.model";

@Injectable()
export class DataService {
    private tasks: Task[] = [
        {
            id: 1,
            author: 'UAS',
            deadline: 123456789,
            done: false,
            title: 'First task',
            version: 1
        },
        {
            id: 2,
            author: 'Jack Carver',
            deadline: 9876543210,
            done: true,
            title: 'Second task',
            version: 2
        }
    ];

    constructor() { }

    Tasks(): Promise<Array<Task>> {        
        return new Promise((resolve, reject) => {
            resolve(this.tasks);
        });
    }
}