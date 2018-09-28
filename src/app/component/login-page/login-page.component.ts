import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmintLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/privado']);
      console.log(res);
    }).catch( (err) => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }
}
