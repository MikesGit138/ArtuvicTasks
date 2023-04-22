import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public username!: string;
  public password!: string;
  constructor(private auth: AuthService, private route: Router) { }

  public createUser(){
    this.auth.createUserPost({username: this.username, password: this.password}).subscribe({
      next: res => {
        console.log(res);
        console.log("User created of name " + res.username);
      },
      complete: () => this.route.navigate(['/login'])
    })
  }

  public backToLogin(){
    this.route.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
