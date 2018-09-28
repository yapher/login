import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// servicios
import {environment} from '../environments/environment';
import {AuthService} from './services/auth.service';
import {AuthGuard} from '../app/guards/auth.guard';

// modulos
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

// component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterPageComponent } from './component/register-page/register-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { PrivadoPageComponent } from './component/privado-page/privado-page.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
