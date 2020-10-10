import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() item_element: Item;
  @Output() item_delete_event = new EventEmitter<string>();
  @Output() item_update_plus_event = new EventEmitter<any>();
  @Output() item_update_minus_event = new EventEmitter<any>();
  update_form_display = false;
  amount_to_update: string;

  constructor() {

  }

  ngOnInit(): void {

  }

  onClickDelete() {
    this.item_delete_event.emit(this.item_element.id);
  }

  onClickUpdate() {
    this.update_form_display = true;
  }

  onClickCloseUpdate() {
    this.update_form_display = false;
  }

  onClickUpdatePlus() {
    this.item_update_plus_event.emit({id: this.item_element.id, count: this.amount_to_update});

  }

  onClickCloseUpdateMinus() {
    this.item_update_minus_event.emit({id: this.item_element.id, count: this.amount_to_update});

  }

}
