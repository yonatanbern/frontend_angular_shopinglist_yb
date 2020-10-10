import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  serverElements: Item[] = [];
  contact_me_swtch = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log("oninit-!");
    this.http.get('http://localhost:3000/items').subscribe(responseData => {

      this.updateServerElements(responseData);

    });
  }

  //privte function to update list of items after http request completed
  updateServerElements(resArr: any) {
    this.serverElements = [];
    var resArr_length = resArr.length;
    for (let i = 0; i < resArr_length; i++) {
      this.serverElements.push(new Item(resArr[i].name, resArr[i].id, resArr[i].description, resArr[i].count));
    }
    console.log("List of items updated !");

  }

  //Add item http reques
  onServerAdded(item: Item) {
    console.log("sending post req - add item!");

    this.http.post('http://localhost:3000/items', item).subscribe(responseData => {

      this.updateServerElements(responseData);

    });
  }

  //delete item http request
  onDeleteItem(input_id: string) {

    console.log("sending delete req - delete item!");
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: input_id,
        name: 'test',
      },
    };

    this.http
      .delete('http://localhost:3000/items', options)
      .subscribe((responseData) => {
        this.updateServerElements(responseData);
      });

  }

  //update-plus item http request
  onUpdatePlus(input_obj: any) {

    var id_i = input_obj.id;
    var amount_i = input_obj.count;

    console.log("sending post req - add item!");
    var item = new Item("", id_i, "add", amount_i);
    this.http.put('http://localhost:3000/items', item).subscribe(responseData => {

      this.updateServerElements(responseData);

    });

  }

  //update-minus item http request
  onUpdateMinus(input_obj: any) {

    var id_i = input_obj.id;
    var amount_i = input_obj.count;

    console.log("sending post req - add item!");
    var item = new Item("", id_i, "sub", amount_i);
    this.http.put('http://localhost:3000/items', item).subscribe(responseData => {

      this.updateServerElements(responseData);

    });

  }

  displayContactMe(b: boolean) {
    this.contact_me_swtch = b;

  }

  displayOl(b: boolean) {
    this.contact_me_swtch = b;

  }


}
