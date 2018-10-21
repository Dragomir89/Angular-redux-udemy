import { Component } from "@angular/core";
import { RegisterUser } from '../register.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    constructor(public user: RegisterUser) {}

    login() {
        console.log('register')
    }
}