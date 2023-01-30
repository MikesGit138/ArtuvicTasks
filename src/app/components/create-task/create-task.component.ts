import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  timeOfTask = '';
  titleOfTask = '';
  taskCompleted = false;

  constructor() { }
  onAddTask(){
    console.log('the time of task is ',this.timeOfTask)
    console.log('the title of task is ',this.titleOfTask)
  }
  ngOnInit(): void {

  }

}
