import { HttpErrorResponse, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { User } from "../model/user";
import { Injectable } from "@angular/core";
import { getCookie } from "typescript-cookie";
import { tap, catchError, finalize } from "rxjs/operators";
import { of, throwError } from "rxjs";
@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  user = new User();
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();

    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if(this.user && this.user.pwd && this.user.email){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.email + ':' + this.user.pwd));
    }


let xsrf = getCookie("XSRF-TOKEN");
    console.log(xsrf, "im in interceptor")
    if(xsrf){
      httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);
    }
    //if(!xsrf){

     //let xsrf = sessionStorage.getItem("XSRF-TOKEN");
     //console.log(xsrf, "im in interceptor with session storage")

//    }

    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders,
      withCredentials: true
    });
    const isLogout = typeof req.url === 'string' && (req.url.endsWith('/logout') || req.url.includes('/logout?'));


    return next.handle(xhr).pipe(
      // 🔴 401 zentral behandeln
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          try { sessionStorage.removeItem('userdetails'); } catch {}
          this.router.navigate(['login']);
        }
        return throwError(() => err);
      }),
      // 🔴 läuft IMMER – auch bei 401/500
      finalize(() => {
        if (isLogout) {
          try { sessionStorage.removeItem('userdetails'); } catch {}
          this.router.navigate(['login']);
        }
      }),
      // (optional) Logs etc.
      tap(() => {})
    );
  }
}
