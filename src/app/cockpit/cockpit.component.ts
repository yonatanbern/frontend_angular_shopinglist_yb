import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  item_name="";
  item_id="";
  item_description="";
  item_count="";
  @Output() serverCreate = new EventEmitter<Item>();
  @Output() bluprintCreate = new EventEmitter<{ blueName: string, blueContent: string }>();
  display_head = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    var item_to_display = new Item(this.item_name, this.item_id, this.item_description, this.item_count);
    if (this.item_name.length == 0 || this.item_id.length == 0 ||
      this.item_description.length == 0 || this.item_count.length == 0) {
      alert("Dear user, please make sure you enter values to All of the fields.");
    }
    else {
      this.serverCreate.emit(item_to_display);
    }
  }

  displayHead() {
    this.display_head = true;
  }
  onClickReturn() {
    this.display_head = false;
  }


}
