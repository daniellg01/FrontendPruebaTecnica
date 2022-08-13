import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  uri = 'http://localhost:8000/api';
  token:any;

  constructor(private http: HttpClient,private router: Router) { }
  login(usuario: string, contrasenna: string) {

    this.http.post(this.uri + '/login', {usuario: usuario,contrasenna: contrasenna})
    .subscribe((resp: any) => {
      this.router.navigate(['/user/index']);
      localStorage.setItem('auth_token', resp.access_token);

      },err => {

        this.alerta();
    })
    }
    alerta(){
        Swal.fire('ERROR!','Credenciales incorrectas','error');

    }
    logout() {
      localStorage.removeItem('auth_token');
      this.router.navigate(['/login']);
    }

    public get logIn(): boolean {
      return (localStorage.getItem('auth_token') != null);

    }
}
