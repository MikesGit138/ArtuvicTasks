import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  open = true;
  receiveMsg($event:boolean){
    this.open = $event;
  }

  title = 'artuvic-tasks';
}
