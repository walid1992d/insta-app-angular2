// tslint:disable:no-console
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {

  }

  public log(...args) {
      console.log(...args);
  }

  public error(...args) {
    console.error(...args);
  }

  public warn(...args) {
    console.warn(...args);
  }

}
