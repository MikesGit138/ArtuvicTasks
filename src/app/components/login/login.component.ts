import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username!: string;
  public password!: string;
  public loginError?: string;
  public showLogErr = false;
  private decoded?:any;

  constructor(public router: Router, private jwtService: JwtService) { }

  public loginUser() {
      this.jwtService.login(this.username, this.password).subscribe({
        next: res => {
          if (res) {
            this.decoded = this.jwtService.decodeToken();
              if(this.decoded.username === this.username){
                this.router.navigate(['/task']);
            }
          }},
      error: err => {
        if (err.status === 401) {
          this.loginError = 'Invalid password';
          this.showLogErr = true;
        } else if (err.status === 404) {
          this.loginError = "Inavlid username";
          this.showLogErr = true;
        }
      }
    });
    }


  ngOnInit(): void {
  }






}
