import { Component, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiHandlingService } from 'src/app/services/api-handling.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  public titleOfTask = '';
  private backToTask = false;
  @Output() event = new EventEmitter();

  constructor(private http: HttpClient, private api: ApiHandlingService){}

  onAddTask(){
    this.api.createTask({taskTitle: this.titleOfTask, completed: false})
    .subscribe({
      error: err => console.error(err)
    });
    location.reload();
    this.goToTasks()
  }

  goToTasks(){
    this.backToTask = true;
    this.event.emit(this.backToTask);
  }

}
