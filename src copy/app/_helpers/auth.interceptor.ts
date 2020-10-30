import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { LoginComponent } from '../users/login/login.component';

export const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let AuthToken = this.authService.getAuthToken();
    //let User = this.authService.loggedUser();
    if (AuthToken != null) {
      
      req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + AuthToken) }); 
      console.log(req);
    }
      return next.handle(req);
    }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];