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
  constructor(private logger: LoggerService ) {
    if (environment.envCode !== 'prod') {
      this.logger.log('Logging Enabled in State');
      this.logger.log('INITIAL STATE:', this.getState());

      this.onStateChange().subscribe(() => {
        this.logger.log('CURRENT STATE:', this.getState());
      });
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

    this.state[key] = value;

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
