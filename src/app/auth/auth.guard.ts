import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean |UrlTree{
    const sessionToken=localStorage.getItem('sessionToken');

    if(sessionToken){
      return true;
    }else{
      console.log('Access denied - No sessionToken found!');
      return this.router.createUrlTree(['/login']);
    }
  } 
};
