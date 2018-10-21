import { REGISTER, LOGIN, RECEIVE_MSG } from './actions';

export interface IUserState {
    id: number,
    name:string,
    email: string,
    formMsg: '' 
}

export const INITIAL_USER_STATE: IUserState = {
    id: 0,
    name: '',
    email: '',
    formMsg: ''
}

export function userReducer(
    state: IUserState = INITIAL_USER_STATE, action) {
        console.log('users store ')
        switch (action.type) {
        case REGISTER:
            return action.payload;
        case RECEIVE_MSG:
            return action.payload;
    
        default:
            return state;
    }
}