import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskWidgetComponent } from "app/tasks-widget/tasks-widget.component";
import { TaskInputComponent } from "app/task-input/task-input.component";
import { TaskService } from "app/task/task.service";
import { TaskListComponent } from "app/task-list/task-list.component";
import { DataService } from "app/task/data.service";

@NgModule({
  declarations: [
    AppComponent,
    TaskWidgetComponent,
    TaskInputComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TaskService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }