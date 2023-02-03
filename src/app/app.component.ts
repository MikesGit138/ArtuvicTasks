import { Component, Input } from '@angular/core';
import { taskList } from './model/taskList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  open = false;
  close = false;
  taskList = taskList;

  receiveMsg($event:boolean){
    this.open = $event;
  }
  anotherEvent($event:boolean){
    this.open = $event;

  }
  clearTasks($event: any){
    this.taskList = [];
    console.log('smn')
  }
  title = 'artuvic-tasks';
}
