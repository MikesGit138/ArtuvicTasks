import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  public open = false;
  @Output() public event = new EventEmitter();

  openCard(){
    this.open = !this.open;
    this.event.emit(this.open);
  }

}
