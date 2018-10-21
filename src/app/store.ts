
import { combineReducers } from 'redux'
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './componnets/tasking/store'
import { ICounterState, INITIAL_COUNTER_STATE, counterReducer } from './componnets/counter/store'
import { IUserState, INITIAL_USER_STATE, userReducer } from './componnets/users/store';


export interface IAppState { 
    counter: ICounterState;
    tasking: ITaskingState;
    users: IUserState;
}

export const INITIAL_STATE: IAppState = {
    counter: INITIAL_COUNTER_STATE,
    tasking: TASKING_INITIAL_STATE,
    users: INITIAL_USER_STATE
}

export const rootReducer = combineReducers({
    tasking: taskingReducer,
    counter: counterReducer,
    users: userReducer
})
