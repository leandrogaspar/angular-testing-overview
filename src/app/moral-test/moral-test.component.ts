import { Component, OnInit, OnDestroy } from '@angular/core';

import { MoralStatusService, Status } from './moral-status.service';


enum Message {
  GOOD = ' is a good human being!',
  BAD = ' is the worse human being that ever lived!',
  ERROR = 'ERROR',
}

@Component({
  selector: 'app-moral-test',
  templateUrl: './moral-test.component.html'
})
export class MoralTestComponent {
  public userName = 'Leandro';
  public message = '';

  constructor(
    private moralStatusService: MoralStatusService,
  ) {
    this.updateMessage();
  }

  private updateMessage(): void {
    switch (this.moralStatusService.getMoralStatus()) {
      case Status.GOOD:
        this.message = Message.GOOD;
        break;
      case Status.BAD:
        this.message = Message.BAD;
        break;
      default:
        this.message = Message.ERROR;
        break;
    }
  }

  public onMouseClick(): void {
    this.moralStatusService.setMoralStatus(Status.BAD);
    this.updateMessage();
  }
}
