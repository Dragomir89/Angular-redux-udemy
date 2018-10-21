import { Component } from "@angular/core";
import { RegisterUser } from '../register.model';
import { UsersService } from '../users.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    public user: RegisterUser;

    constructor(private usersService: UsersService) {
        this.user = new RegisterUser();
    }

    register() {
        console.log('register')
        console.log(this.user)
        this.usersService.registerUser(this.user);
    }
}