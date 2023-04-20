import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import jwtDecode from "jwt-decode";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private auth: AuthService) { }

  public login(username: string, password: string){
    return this.auth.loginPost({username: username, password: password})
      .pipe(
        tap((res: any) => {
          localStorage.setItem('TOKEN', res);
        }));
  }

  public decodeToken(){
    return jwtDecode(localStorage.getItem('TOKEN')!);
  }
}
