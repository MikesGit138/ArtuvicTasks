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
  del = false;

  constructor() { }

  complete(task:Task){
    task.completed = !task.completed;
  }
  // delFunc(){
  //   this.del = !this.del
  // }
  deleteTask(task: any){
      const index = taskList.indexOf(task);
     // const index = taskList.findIndex((el) => el)
       console.log(task.taskTitle);
       console.log(taskList.indexOf(task))
       this.taskList.splice(index,1)
      // this.del == !this.del;
      // this.taskList.filter(this.delFunc, taskList)
  }
  
  ngOnInit(): void {
  }

}
