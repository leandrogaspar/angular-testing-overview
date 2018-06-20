import { Injectable } from '@angular/core';

export enum Status {
  GOOD,
  BAD
}

@Injectable()
export class MoralStatusService {
  moralStatus = Status.GOOD;

  public setMoralStatus(moralStatus: Status): void {
    // Pretend we make a HTTP request to set the status...
    this.moralStatus = moralStatus;
  }

  public getMoralStatus(): Status {
    // Pretend we make a HTTP request to get the status...
    return this.moralStatus;
  }
}
