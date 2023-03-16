import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() saludo = '';
  @Input() name = '';
  constructor() {
    console.log("%c Desde el constructor", 'color:red');
    this.saludo = "Saludo desde el hijo desde el constructor";
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("%c Desde el ngOnChanges", 'color:#7D6608');
    ///this.saludo = "Saludo desde el hijo desde el ngOnChanges";
  }
}
