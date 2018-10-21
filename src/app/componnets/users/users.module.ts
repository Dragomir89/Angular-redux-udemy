import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
//--components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormMsg } from './formErrMsg/FormMsg.component';
//--providers
import { UsersService } from './users.service';


@NgModule({
    declarations: [RegisterComponent, LoginComponent, FormMsg],
    imports: [FormsModule],
    providers: [UsersService],
    exports: [RegisterComponent, LoginComponent]
})

export class UsersModule { }