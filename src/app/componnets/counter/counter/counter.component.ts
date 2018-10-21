import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from '../../../store'
import { INCREMENT, GET_COUNTER } from '../actions';
import { CounterService } from '../counter.service'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent  implements OnInit, OnDestroy {
  public title = 'angular-redux-udemy';
  public count;
  private stateSubscribe;

  constructor(private ngRedux: NgRedux<IAppState>, private counterService: CounterService) {
    this.stateSubscribe = ngRedux.subscribe(()=>{
      this.count = ngRedux.getState().counter.counter;
    });
  }

  ngOnInit() {
    // console.log('ON INIT counter')
    this.ngRedux.dispatch({ type: GET_COUNTER});

  }

  ngOnDestroy() {
    this.stateSubscribe.unsubscribe()
  }

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT});
  }
}
