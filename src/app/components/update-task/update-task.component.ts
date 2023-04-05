import {Component, EventEmitter, Output, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiHandlingService} from 'src/app/services/api-handling.service';
import {Task} from "../../model/taskClass";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent {
  private backToTask = false;
  @Output() event = new EventEmitter();
  @Output() updateEvent:EventEmitter<Task> = new EventEmitter();
  @Input() taskID?: number;
  @Input() taskTitle?: string;
  constructor(private http: HttpClient, private api: ApiHandlingService) {}


  onUpdateTask(){
    console.log(this.taskID + "from update task component")
    this.api.updateTask({id: this.taskID, taskTitle: this.taskTitle})
    .subscribe({
      error: err => console.error(err),
    });
  this.goToTasks();
  location.reload();
  }

  goToTasks(){
    this.backToTask = false;
    this.event.emit(this.backToTask);
  }
}
