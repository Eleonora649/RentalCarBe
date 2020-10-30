import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

//export const TOKEN_HEADER_KEY = 'Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }
 
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    if (this.authService.loggedUser()) {
        const token = this.authService.getAuthToken();
        request = request.clone({
                          setHeaders: 
                          {
                              Authorization: `Bearer ${token}`
                          }});
    }console.log(request);
   return next.handle(request);
  }
}  
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

/*intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let AuthToken = this.authService.getAuthToken();
    //let User = this.authService.loggedUser();
    if (AuthToken != null) {
      
      req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + AuthToken) }); 
      console.log(req);
    }
      return next.handle(req);
    }*/