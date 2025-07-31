import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { User } from "../model/user";

@Injectable()
export class AuthActivateRouteGuard {
    user = new User();

    constructor(private router: Router){

    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
      console.log("in can activate")
        if(sessionStorage.getItem('userdetails')){
            this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
        }
        if(this.user.email.length===0){
            this.router.navigate(['login']);
        }
        return this.user.email.length!==0?true:false;
    }

}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AuthActivateRouteGuard).canActivate(next, state);
  }
