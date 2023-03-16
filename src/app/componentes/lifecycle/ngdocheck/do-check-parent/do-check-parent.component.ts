import { Component, ViewChild } from '@angular/core';
import { Hero } from '../../models/hero';
import { DoCheckChildComponent } from '../do-check-child/do-check-child.component';

@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.css']
})
export class DoCheckParentComponent {
  hero!: Hero;
  power = '';
  title = 'DoCheck';
  @ViewChild(DoCheckChildComponent) childView!: DoCheckChildComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
