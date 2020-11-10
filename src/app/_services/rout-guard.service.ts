import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate  {

  token: string;
  rolesAuth: string[];

  constructor(private tokenService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    this.token = this.tokenService.getAuthToken();

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);
    this.rolesAuth = decodedToken['authorization'];

    if (!this.tokenService.loggedUser())
    {
      this.router.navigate(['login']);
      console.log(this.tokenService);
      return false;
    }
    else 
    {
      if (route.data.rolesAuth == null || route.data.rolesAuth.length === 0)
        return true;
      else if (this.rolesAuth.some(r=> route.data.role.includes(r))) {
        console.log(this.rolesAuth);
        return true;
      } 
      else
      {
        this.router.navigate(['forbidden']);
        return false;
      }
    }
  }
}   
