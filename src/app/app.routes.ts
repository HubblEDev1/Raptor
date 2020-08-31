import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecoverpasswordComponent } from './components/recoverpassword/recoverpassword.component';
import { CreateComponent } from './components/create/create.component';
import { ClienteComponent } from './components/create/cliente/cliente.component';
import { MotoenvioComponent } from './components/create/motoenvio/motoenvio.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'recoverpassword', component: RecoverpasswordComponent},
    { path: 'create', component: CreateComponent },
    { path: 'cuentacliente', component: ClienteComponent},
    { path: 'cuentamotoenvio', component: MotoenvioComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


