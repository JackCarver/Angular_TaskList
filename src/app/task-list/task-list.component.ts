import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Task from "app/task/task.model";
import { TaskService } from "app/task/task.service";

@Component({
    selector: "task-list",
    templateUrl: "./task-list.component.html"
})
export class TaskListComponent implements OnInit {
    @Input() tasks: Task[];
    @Output() edit: EventEmitter<Task> = new EventEmitter();

    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        this.taskService.getAll().then(data => this.tasks = data);
    }

    remove(task: Task): void {
        this.taskService.remove(task);
    }

    changeStatus(task: Task): void {
        this.taskService.changeStatus(task);
    }

    onEdit(task: Task): void {
        this.edit.emit(task);
    }
}