import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { localStorageService } from 'src/app/service/localStorage.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  timeOfTask = '';
  titleOfTask = '';
  taskCompleted = false;
  backToTask = false;
  @Output() event = new EventEmitter(); 

  constructor(public lstore: localStorageService) { }

  onAddTask(){
    console.log('the time of task is ',this.timeOfTask)
    console.log('the title of task is ',this.titleOfTask)
  }

  goToTasks(){
    this.backToTask = !this.backToTask;
    this.event.emit(this.backToTask);
  }
  
  ngOnInit(): void {

  }

}
