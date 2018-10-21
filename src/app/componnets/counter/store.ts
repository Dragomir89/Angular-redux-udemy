import { INCREMENT, GET_COUNTER } from './actions';
import { tassign } from 'tassign';


export interface ICounterState { 
    counter: number;

}

export const INITIAL_COUNTER_STATE: ICounterState = {
    counter: 0
}

export function counterReducer(state: ICounterState = INITIAL_COUNTER_STATE, action): ICounterState {
    
    switch (action.type) {
        case INCREMENT :
            return tassign(state, { counter: ++state.counter });
        
        case GET_COUNTER: 
            return tassign(state, { counter: state.counter });
        
        default:    
            return state; 
    }
}