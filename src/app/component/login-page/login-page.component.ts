import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router, public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmintLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMensaje.show('Usuario logeado correctamente', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privado']);
      console.log(res);
    }).catch( (err) => {
      this.flashMensaje.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });
  }

  onClikGoogleLogin() {
    this.authService.loginGoogle()
    .then( (res) => {
      this.flashMensaje.show('Usuario logeado correctamente', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privado']);
      console.log(res);
    }).catch( (err) => {
      this.flashMensaje.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });
  }

  onClikFacebookLogin() {
    this.authService.loginFacebook()
    .then( (res) => {
      this.flashMensaje.show('Usuario logeado correctamente', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/privado']);
      console.log(res);
    }).catch( (err) => {
      this.flashMensaje.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    });
  }
}
