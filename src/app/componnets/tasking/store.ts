import { ADD_NEW_TODO, GET_TODOS } from './actions';
import { tassign } from 'tassign';

export interface ITaskingState { 
    todos: string[];
}

export const TASKING_INITIAL_STATE: ITaskingState = {
    todos:[]
}

export function taskingReducer(state: ITaskingState = TASKING_INITIAL_STATE, action): ITaskingState {

    switch (action.type) {
        case GET_TODOS: 
            return tassign(state, { todos: state.todos.slice() });

        case ADD_NEW_TODO:
            let todos = state.todos.slice();
            todos.push(action.payload);
            return tassign(state, { todos });
        
        default:    
            return state; 
    }
}