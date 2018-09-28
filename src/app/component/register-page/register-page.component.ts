import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router, public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
     this.authService.registerUser(this.email, this.password)
       .then( (res) => {
         this.flashMensaje.show('Usuario fue creado correctamente', {cssClass: 'alert-success', timeout: 4000});
         this.router.navigate(['/privado']);
         console.log(res);
       }).catch( (err) => {
        this.flashMensaje.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
       });
  }

}
