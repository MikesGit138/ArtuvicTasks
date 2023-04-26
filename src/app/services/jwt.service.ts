import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import jwtDecode from "jwt-decode";
import {tap, BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn = this._isLoggedIn$.asObservable();
  constructor(private auth: AuthService) {
    this._isLoggedIn$.next(this.isTokenValid());
  }

  public login(username: string, password: string){
    return this.auth.loginPost({username: username, password: password})
      .pipe(
        tap((res: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('TOKEN', res);
        }));
  }


  public decodeToken(){
    return jwtDecode(localStorage.getItem('TOKEN')!);
  }

  private isTokenValid() {
const token = localStorage.getItem('TOKEN');
    if (!token) {
      return false;
    }
    const decodedToken = this.decodeToken();
    const expirationDate = new Date(0);
    // @ts-ignore
    expirationDate.setUTCSeconds(decodedToken.exp);
    return expirationDate > new Date();
  }
}
