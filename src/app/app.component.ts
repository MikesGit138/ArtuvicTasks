import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public open = false;
  public openUpdate = false;

  receiveMsg($event:boolean){
    this.open = $event;
    console.log("receiveMsg: " + $event)
  }
  receiveMsg2($event:boolean){
    this.openUpdate = $event;
    console.log("receiveMsg2: " + $event)
  }

  anotherEvent($event:boolean){
    this.open = $event;
    console.log("anotherEvent: " + $event)
  }

  title = 'artuvic-tasks';
}
