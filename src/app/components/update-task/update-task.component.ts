import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiHandlingService} from 'src/app/services/api-handling.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent {
  public titleOfTask?: string;
  private backToTask = false;
  @Output() event = new EventEmitter();
  
  constructor(private http: HttpClient, private api: ApiHandlingService) {}

  onUpdateTask(){
    this.api.updateTask({taskTitle: this.titleOfTask})
    .subscribe({
      error: err => console.error(err)
    });
  }

  goToTasks(){
    this.backToTask = !this.backToTask;
    this.event.emit(this.backToTask);
  }
}
