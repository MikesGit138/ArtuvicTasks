import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/taskClass';
import { taskList } from 'src/app/model/taskList';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  // @Input() time = '';
  // @Input() title = '';
  // @Input() completed = false;
  taskList = taskList;

  constructor() { }

  complete(task:Task){
    task.completed = !task.completed;
  }
  deleteTask(task: any){
       const index = taskList.indexOf(task.taskTitle);
       console.log(task.taskTitle);
       this.taskList.splice(index,1)
  }
  
  ngOnInit(): void {
  }

}
