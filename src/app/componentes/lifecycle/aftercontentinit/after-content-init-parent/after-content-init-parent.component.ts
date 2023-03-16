import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-after-content-init-parent',
  templateUrl: './after-content-init-parent.component.html',
  styleUrls: ['./after-content-init-parent.component.css']
})
export class AfterContentInitParentComponent {
  show = true;

  constructor(public logger: LoggerService) { }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
