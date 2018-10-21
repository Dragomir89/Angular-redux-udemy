import { Component, OnInit, OnDestroy } from '@angular/core';
import { GET_TODOS } from '../actions';
import { NgRedux } from 'ng2-redux';
// import { ITaskingState } from '../store';
import { IAppState } from '../../../store';

@Component({
    selector: 'app-delete-all',
    templateUrl: './dashboard.component.html'
})

export class Dashboard implements OnInit, OnDestroy {

    public conut: number
    private subscriber;
    constructor(private ngRedux: NgRedux<IAppState>) { 
        this.subscriber = ngRedux.subscribe(()=>{
            // console.log(ngRedux.getState())
            this.conut = ngRedux.getState().tasking.todos.length;
        })
    }

    ngOnInit() {
        this.ngRedux.dispatch({type: GET_TODOS})
    }

    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }

    deleteAll = function () {
        console.log('delete all');
    }
}