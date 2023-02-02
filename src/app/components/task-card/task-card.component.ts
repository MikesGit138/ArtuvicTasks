import { Component, OnInit, Input } from '@angular/core';
import { taskList } from 'src/app/model/taskList';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  // @Input() time = '';
  // @Input() title = '';
  // private completed = false;
  taskList = taskList;
  mainTasks = [];

  constructor() { }
  
 
  addToTaskList(){
    // taskList.push(this.time)

  }
  
  
  ngOnInit(): void {
  }

}
