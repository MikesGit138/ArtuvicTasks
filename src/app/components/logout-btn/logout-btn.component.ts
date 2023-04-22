import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.scss']
})
export class LogoutBtnComponent implements OnInit {

  constructor(private route: Router) { }

  public logout = (): Promise<boolean> => {
    localStorage.removeItem("TOKEN");
    return this.route.navigate(['/login']);
  };
  ngOnInit(): void {

  }

}
