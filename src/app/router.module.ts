
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './componnets/users/register/register.component';
import { Home } from './componnets/common/home.component';
import { Parent } from './componnets/parent-child-relations/parent/parent.component';


const routes: Routes = [
    { path: '', component: Home},
    { path: 'users/register', component: RegisterComponent},
    { path: 'relations', component: Parent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutesModule { }
