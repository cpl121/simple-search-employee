import { Component } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent {

  value: string = "";
  valueToSend: string = "";

  sendData() {
    if (this.value.trim() !== "") {
      this.valueToSend = this.value.trim();
    }
    else {
      this.valueToSend = "";
    }
  }

}
