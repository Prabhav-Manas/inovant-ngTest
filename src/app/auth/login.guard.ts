import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class LogInGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const sessionToken=localStorage.getItem('sessionToken');

    if(sessionToken){
      console.log('User already loggedin');
      return this.router.createUrlTree(['/my-account']);
    }else{
      return true;
    }
  }
};
