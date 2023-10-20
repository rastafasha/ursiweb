import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [


    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'password-reset', component: PasswordresetComponent },
    { path: 'new-password', component: NewpasswordComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
