import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {cloneDeep} from 'lodash';
import { filter, map } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import {environment} from '../../environments/environment';
export const initialState = {
  token: null,

};
@Injectable({
  providedIn: 'root'
})
export class StateService {
  private logEnabled = false;
  constructor(private logger: LoggerService ) {
    if (environment.envCode !== 'prod') {
      this.logEnabled = true;
      this.logger.log('Logging Enabled in State');
    }
  }
  private state = initialState;
  private stateChanged: Subject<string> = new Subject<string>();


   getState(key?: string) {

    if (!key) {
    return cloneDeep(this.state);
     }

    return cloneDeep(this.state)[key];
  }


  setState(key: string, value: any) {
    const existingValue = this.getState(key);

    this.state[key] = value;

    if (this.logEnabled) {
    this.logger.log('STATE VALUE CHANGE: ' ,  {key, existingValue , newValue: value});

    this.logger.log('CURRENT STATE: ' , this.getState());
    }

    this.stateChanged.next(key);
  }

  onStateChange(key?: string): Observable<any> {
    let changeObservable: any = this.stateChanged;
    if (key) {
      changeObservable = this.stateChanged.pipe(filter(k => k === key));
    }
    return changeObservable.pipe(map(() => this.getState(key)));
  }




}
