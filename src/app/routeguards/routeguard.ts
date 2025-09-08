import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { User } from "../model/user";

@Injectable()
export class AuthActivateRouteGuard {
    user = new User();

    constructor(private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean | UrlTree{
      console.log("in can activate")
        if(sessionStorage.getItem('userdetails')){
            this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
        }
        if(this.user.email.length===0 || !this.user.email.includes("@")){
          console.log("go to login")
          return this.router.parseUrl('login')
        }
        return true
    }

}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree=> {
    return inject(AuthActivateRouteGuard).canActivate(next, state);
  }
