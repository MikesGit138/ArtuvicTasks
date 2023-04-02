import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/model/taskClass';
import { taskList } from 'src/app/model/taskList';
import { ApiHandlingService } from 'src/app/services/api-handling.service';



@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  public taskList?:Task[];

  constructor(private api: ApiHandlingService){}

  complete(task:Task){
    //task.completed = !task.completed;
    this.api.completeTask(task).subscribe({
      next: () => console.log("Task completed"),
    });
    location.reload();
  }

  deleteTask(task: any){
      // const index = taskList.indexOf(task);
      // this.taskList?.splice(index,1)
      this.api.deleteTask(task).subscribe({
        next: () => console.log("Task deleted"),
      });
      location.reload();
  }

  ngOnInit():void{
    this.api.getTasks()
    .subscribe({
      next: res => this.taskList = res,
      error: err => console.error(err)
    })
  }
  

}
