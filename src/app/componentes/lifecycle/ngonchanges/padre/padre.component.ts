import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  saludo = '';
  title = 'OnChanges';
  name='';
  @ViewChild(HijoComponent) childView!: HijoComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // setting power only triggers onChanges if this value is different
    this.saludo = 'Saludo desde el padre';
  }
}
