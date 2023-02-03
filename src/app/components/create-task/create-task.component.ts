import { Component, Output, EventEmitter } from '@angular/core';
import { taskList } from 'src/app/model/taskList';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  public timeOfTask = '';
  public titleOfTask = '';
  public taskCompleted = false;
  private backToTask = false;
  public taskList = taskList;
  @Output() event = new EventEmitter(); 

  onAddTask(){
    console.log('the time of task is ',this.timeOfTask)
    console.log('the title of task is ',this.titleOfTask)
    this.taskList.push({time: this.timeOfTask, taskTitle: this.titleOfTask, completed: this.taskCompleted})
    this.goToTasks()
  }

  goToTasks(){
    this.backToTask = !this.backToTask;
    this.event.emit(this.backToTask);
  }

}
