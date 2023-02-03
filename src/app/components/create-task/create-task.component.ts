import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { localStorageService } from 'src/app/service/localStorage.service';
import { taskList } from 'src/app/model/taskList';
import { Task } from 'src/app/model/taskClass';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  public timeOfTask = '';
  public titleOfTask = '';
  public taskCompleted = false;
  private backToTask = false;
  public taskList = taskList;
  @Output() event = new EventEmitter(); 

  constructor(public lstore: localStorageService) { }

  onAddTask(){
    console.log('the time of task is ',this.timeOfTask)
    console.log('the title of task is ',this.titleOfTask)
    this.taskList.push({time: this.timeOfTask, taskTitle: this.titleOfTask, completed: this.taskCompleted})
    this.lstore.saveTask({time: this.timeOfTask, taskTitle: this.titleOfTask, completed: this.taskCompleted})
    this.goToTasks()
  }

  goToTasks(){
    this.backToTask = !this.backToTask;
    this.event.emit(this.backToTask);
  }
  
  ngOnInit(): void {

  }

}
