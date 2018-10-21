import { Injectable } from "@angular/core";
import { Http } from '@angular/http'
import { RegisterUser } from './register.model';
import { REGISTER, LOGIN, RECEIVE_MSG } from './actions';
import { NgRedux } from 'ng2-redux';
import { IUserState } from "./store";
import { Router } from '@angular/router';

@Injectable()
export class UsersService {
    private baseUrl = 'http://localhost:5000/';
    constructor( private http: Http, private router: Router, private ngRedux: NgRedux<IUserState>, ) { }
    
    registerUser(user: RegisterUser) {
        console.log('users.service -> registerUser');

        const url = this.baseUrl + 'auth/signup';
        
        return this.http.post(url, user).toPromise().then((payload)=>{
            const res = JSON.parse(payload._body);
            const success = res.success;
            
            if (success) {
                this.router.navigateByUrl('/');
            } else {
                this.router.navigateByUrl('/users/register');
                this.ngRedux.dispatch({
                    type: RECEIVE_MSG, 
                    payload: {message: res.message}
                })
            }

        }).catch((err)=>{
            console.log('Request faild !');
            console.log(err);
        });
        // let newUser = { id:1, name: user.name, email: user.email }
        // this.ngRedux.dispatch({type:REGISTER, payload: newUser});
    }
    loginUser(user){

    }
}