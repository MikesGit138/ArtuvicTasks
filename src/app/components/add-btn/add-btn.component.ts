import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {
  public openCreateTask = false
  @Output() public childEvent = new EventEmitter()

  constructor() { }
 
  createTask(){
    this.openCreateTask = !this.openCreateTask;
    this.childEvent.emit(this.openCreateTask);
  }
  ngOnInit(): void {
  }

}
