import { Injectable } from '@angular/core';
import { taskList } from '../model/taskList';
import { Task } from '../model/taskClass';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  public saveTask(task: Task){
    localStorage.setItem('taskList', JSON.stringify(task))

  }
}
