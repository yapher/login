import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
     this.authService.registerUser(this.email, this.password)
       .then( (res) => {
         this.router.navigate(['/privado']);
         console.log(res);
       }).catch( (err) => {
         console.log(err);
       });
  }

}
