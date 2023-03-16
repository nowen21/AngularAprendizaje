import { Component, DoCheck, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-do-check-child',
  templateUrl: './do-check-child.component.html',
  styleUrls: ['./do-check-child.component.css']
})
export class DoCheckChildComponent implements DoCheck {
  @Input() hero!: Hero;
  @Input() power = '';

  changeDetected = false;
  changeLog: string[] = [];
  oldHeroName = '';
  oldPower = '';
  oldLogLength = 0;
  noChangeCount = 0;

  ngDoCheck() {

    // * se valida el cambio del nombre
    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Hero name change "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }

    // * se valida el cambio del poder
    if (this.power !== this.oldPower) {
      this.changeDetected = true;
      this.changeLog.push(`DoCheck: Power change "${this.power}" from "${this.oldPower}"`);
      this.oldPower = this.power;
    }

    // * Cuando  ha habido cambios en  name o  power
    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else { // * Cuando no ha habido cambios en name o power. Se pasa de un campo a otro
      
      // * Contrar las veces que se pasa de un campo a otro
      const count = this.noChangeCount += 1;
      // * Se crea el mensaje indicando que no ha habido cambios
      const noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
      // * cuando es el primer conteo
      if (count === 1) {
        // Se agrega el primer mensaje indicando que no ha habido cambios
        this.changeLog.push(noChangeMsg);
      } else {
        // Se agrega una nueva posición con el nuevo mensaje indicando que no ha habido cambios
        this.changeLog[this.changeLog.length - 1] = noChangeMsg;
      }
    }

    this.changeDetected = false;
  }

  reset() {
    this.changeDetected = true;
    this.changeLog = [];
  }
}
