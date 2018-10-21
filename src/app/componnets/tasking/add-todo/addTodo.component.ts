import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from 'ng2-redux';
// import { ITaskingState } from '../store'; 
import { IAppState } from '../../../store';
import { GET_TODOS, ADD_NEW_TODO } from '../actions';

@Component({
    selector: 'app-add-todo',
    templateUrl: './addTodo.component.html'
})

export class AddTodo implements OnInit, OnDestroy{
    public newTodo: string = '';
    public todos: string[];
    private subscrieber;

    constructor(private ngRedux: NgRedux<IAppState>) { 
        this.subscrieber = this.ngRedux.subscribe(()=>{
            this.todos = this.ngRedux.getState().tasking.todos;
        });
    }

    ngOnInit() {
        this.ngRedux.dispatch({type: GET_TODOS});
    }

    ngOnDestroy() {
        this.subscrieber.unsubscribe()
    }

    submitTodo = function () {
        this.ngRedux.dispatch({type: ADD_NEW_TODO, payload: this.newTodo})
    }
}