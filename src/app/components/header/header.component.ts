import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public open = false;
  @Output() public event = new EventEmitter();

  constructor() { }

  openCard(){
    this.open = !this.open;
    this.event.emit(this.open);
  }

  ngOnInit(): void {
  }

}
