import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :Promise<boolean> {


    return new Promise((resolve, reject) => {
         if(this.auth.logIn){
          resolve(true);
         }else{
         this.router.navigate(['/login']);
          resolve(false);
         }
    })
    //end of verify

  //end of canActivate

  }
}
