import { Injectable } from '@angular/core';
import { taskList } from '../model/taskList';
import { Task } from '../model/taskClass';

@Injectable({
  providedIn: 'root'
})
export class localStorageService {
  taskList = taskList;
  // newTaskList = []
  constructor() { }
  public saveTask(task: Task){
    localStorage.setItem('taskList', JSON.stringify(task))
    // this.taskList.push(task);
  }
}
