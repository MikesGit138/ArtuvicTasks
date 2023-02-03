import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { taskList } from 'src/app/model/taskList';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  public taskList = taskList;
  public open = false;
  @Output() public event = new EventEmitter();
  @Output() public clear = new EventEmitter();

  constructor() { }

  openCard(){
    this.open = !this.open;
    this.event.emit(this.open);
  }

  clearTasks(){
    this.taskList = [];
    console.log(this.taskList)
    this.clear.emit(this.taskList)
  }

}
