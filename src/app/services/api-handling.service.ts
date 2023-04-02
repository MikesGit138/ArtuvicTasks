import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/taskClass';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlingService {
  
  private getTasksURI = environment.api_route + "/tasks"
  private createTaskURI = environment.api_route + "/create-task";

  constructor(private http: HttpClient) { }

  public getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.getTasksURI);
  }

  public createTask(task: Task){
    return this.http.post<Task>(this.createTaskURI, task);
  }
}
