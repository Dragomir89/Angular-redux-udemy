import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from 'ng2-redux';
// components
import { AppComponent } from './app.component';
import { Home } from './componnets/common/home.component'
//
// modules
import { AppRoutesModule } from './router.module';

import { CounterMoule } from './componnets/counter/counter.module';
import { TaskingModule } from './componnets/tasking/tasking.module';
import { UsersModule } from './componnets/users/users.module';
import { ParentChldModule } from './componnets/parent-child-relations/parent-child.module';
//
// services
//

import { IAppState, rootReducer } from './store';
import { INITIAL_STATE } from './store'

@NgModule({
  declarations: [
    AppComponent,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    NgReduxModule,
    CounterMoule,
    TaskingModule,
    UsersModule,
    ParentChldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>){
    console.log(INITIAL_STATE);
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
