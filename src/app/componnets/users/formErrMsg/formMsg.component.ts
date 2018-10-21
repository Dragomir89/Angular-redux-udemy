import { Component } from "@angular/core";
import { NgRedux } from 'ng2-redux';
import { IUserState } from '../store';

@Component({
    selector: 'app-form-msg',
    templateUrl:'formMsg.component.html'
})


export class FormMsg {
    public message: string;
    private subscriber;
    constructor(private ngRedux: NgRedux<IUserState>) { 
        this.subscriber = ngRedux.subscribe(()=>{
            this.message = ngRedux.getState().users.message
            console.log('==== FORM MSG ====');
            console.log(this.message);
        });
        
    }


}