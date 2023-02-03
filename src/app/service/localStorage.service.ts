import { Injectable } from '@angular/core';
import { taskList } from '../model/taskList';
import { Task } from '../model/taskClass';

@Injectable({
  providedIn: 'root'
})
export class localStorageService {
  public taskList = taskList;
  // newTaskList = []
  constructor() { }
  public saveTask(task: object){
    // this.taskList.push(task);
    localStorage.setItem('taskList', JSON.stringify(taskList))
    // this.taskList.push(task);
  }
  public compTask(a:boolean, task: Task){
    localStorage.setItem('taskList', JSON.stringify(task.completed))
    a = !a;
  }
}
