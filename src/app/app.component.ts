import { Component} from '@angular/core';
import { taskList } from './model/taskList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public open = false;
  public close = false;
  public taskList = taskList;

  receiveMsg($event:boolean){
    this.open = $event;
  }
  anotherEvent($event:boolean){
    this.open = $event;

  }

  title = 'artuvic-tasks';
}
