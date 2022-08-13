import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  contrasenna = '';

  constructor(private authService: AuthService) {

  }
  Login() {
  this.authService.login(this.usuario, this.contrasenna)
  }

  ngOnInit() { }
}
