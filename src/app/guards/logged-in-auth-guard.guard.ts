import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/AuthServices/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInAuthGuardGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/tabs/home']);
        return false
      } else {
        return true;
      }
  }
  
}
