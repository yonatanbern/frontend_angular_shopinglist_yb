import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output() contactme_event = new EventEmitter<boolean>();
  @Output() contactol_event = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onClickContactMe() {
    this.contactme_event.emit(true);

  }
  onClickOl() {
    this.contactol_event.emit(false);

  }

}
