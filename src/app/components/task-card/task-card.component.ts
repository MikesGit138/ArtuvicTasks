import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/taskClass';
import { taskList } from 'src/app/model/taskList';


@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  public taskList = taskList;

  complete(task:Task){
    task.completed = !task.completed;
  }

  deleteTask(task: any){
      const index = taskList.indexOf(task);
       console.log(task.taskTitle);
       console.log(taskList.indexOf(task))
       this.taskList.splice(index,1)
  }

}
