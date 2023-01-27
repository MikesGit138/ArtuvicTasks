import { Component, OnInit } from '@angular/core';
import { taskList } from 'src/app/model/taskList';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  
  constructor() { }
  taskList = taskList;
  
  
  ngOnInit(): void {
  }

}
