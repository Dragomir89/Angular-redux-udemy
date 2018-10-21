import { NgModule } from "@angular/core";
import { AddTodo } from './add-todo/addTodo.component';
import { Dashboard } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [AddTodo, Dashboard],
    imports: [FormsModule,BrowserModule],
    providers: [],
    exports: [AddTodo, Dashboard]
})

export class TaskingModule { }