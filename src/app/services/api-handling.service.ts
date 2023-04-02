import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/taskClass';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlingService {

  private getTasksURL = environment.api_route + "/tasks"
  private createTaskURL = environment.api_route + "/create-task";
  private completeTaskURL = environment.api_route + "/complete-task/";
  private deleteTaskURL = environment.api_route + "/del-task/";
  private updateTaskURL = environment.api_route + "/update-task/";

  constructor(private http: HttpClient) { }

  public getTasks():Observable<Task[]>{
    return this.http.get<Task[]>(this.getTasksURL);
  }

  public createTask(task: Task){
    return this.http.post<Task>(this.createTaskURL, task);
  }

  public completeTask(task: Task){
    return this.http.put<Task>(this.completeTaskURL + task.id, task);
  }

  public deleteTask(task: Task){
    return this.http.delete<Task>(this.deleteTaskURL + task.id);
  }

  public updateTask(task: Task){
    return this.http.put<Task>(this.updateTaskURL + task.id, task);
  }


}
