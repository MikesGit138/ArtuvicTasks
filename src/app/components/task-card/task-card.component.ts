import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/taskClass';
import { ApiHandlingService } from 'src/app/services/api-handling.service';



@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  public taskList?:Task[];
  public openUpdate = false;
  public taskToUpdate!: Task;
  public taskID?: number;
  public taskTitle?: string;
  @Output() public event = new EventEmitter();
  @Output() public updateEvent:EventEmitter<Task> = new EventEmitter();

  constructor(private api: ApiHandlingService){}

  complete(task:Task){
    this.api.completeTask(task).subscribe({
      next: () => console.log("Task completed")
    });
    //location.reload();
   task.completed = !task.completed;
  }

  deleteTask(task: any){
      this.api.deleteTask(task).subscribe({
        next: () => console.log("Task deleted"),
      });
      // location.reload();
    const index = this.taskList!.indexOf(task);
    this.taskList!.splice(index,1)
  }

  openUpdateCard(task: Task){
    this.openUpdate = true;
    this.event.emit(this.openUpdate);
    console.log("openUpdateCard: " + this.openUpdate)
    this.taskToUpdate = task;
    this.taskID = task.id;
    this.taskTitle = task.taskTitle;
    console.log(this.taskToUpdate)
  }
  receiveMsg2($event:boolean){
    this.openUpdate = $event;
    console.log("receiveMsg2: " + $event)
  }

  ngOnInit():void{
    this.api.getTasks()
    .subscribe({
      next: res => this.taskList = res,
      error: err => console.error(err)
    })
  }


}
