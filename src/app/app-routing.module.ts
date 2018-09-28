import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// servicios
import {AuthGuard} from '../app/guards/auth.guard';

// componentes
import { HomePageComponent } from './component/home-page/home-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { PrivadoPageComponent } from './component/privado-page/privado-page.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'privado', component: PrivadoPageComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
