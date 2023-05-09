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
            this.decoded = this.jwtService.decodeToken()
            console.log(this.decoded)
            if(this.decoded.username === this.username){
              this.router.navigate(['/task'])
            }
          }},
      error: err => {
        this.showLogErr = true;}
      })
    }

    public goToSignUp(){
      this.router.navigate(['/signup'])
    }


  ngOnInit(): void {
  }






}
