import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { JwtService } from '../services/jwt.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(private jwtService: JwtService, public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.jwtService.isLoggedIn.pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn){
          this.router.navigate(['login']).then(r => console.log("UNAUTHORIZED"))
        }
      })
    );
  }

}
