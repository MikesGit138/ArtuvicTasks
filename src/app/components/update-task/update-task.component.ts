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
  @Input() taskReceived!: Task;
  @Input() taskID?: number;
  @Input() taskTitle?: string;
  constructor(private http: HttpClient, private api: ApiHandlingService) {}

  public titleOfTask?: string;
  public task!: Task;


  onUpdateTask(){
    console.log(this.taskID + "from update task compoent")
    this.api.updateTask({id: this.taskID, taskTitle: this.titleOfTask})
    .subscribe({
      error: err => console.error(err),
    });

  }

  goToTasks(){
    this.backToTask = false;
    this.event.emit(this.backToTask);
  }
}
