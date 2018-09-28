import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
     this.authService.registerUser(this.email, this.password)
       .then( (res) => {
         console.log('muy bien');
         console.log(res);
       }).catch( (err) => {
         console.log(err);
       });
  }

}
