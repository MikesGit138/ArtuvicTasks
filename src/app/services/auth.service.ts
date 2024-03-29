import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginURL = environment.api_route + "/login";
  private createUserURL = environment.api_route + "/create-user";
  constructor(private http:HttpClient) { }

  public loginPost(user: User):Observable<User>{
    return this.http.post<User>(this.loginURL, user);
  }

  public createUserPost(user: User):Observable<User>{
    return this.http.post<User>(this.createUserURL, user);
  }

}
