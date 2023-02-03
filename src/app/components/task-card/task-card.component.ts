import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/taskClass';
import { taskList } from 'src/app/model/taskList';
import { localStorageService } from 'src/app/service/localStorage.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  
  public taskList = taskList;

  constructor(public lstore: localStorageService) { }

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
