import { TestBed } from '@angular/core/testing';

import { StateService, initialState } from './state.service';
import { LoggerService } from './logger.service';

describe('StateService', () => {
  beforeEach(() => TestBed.configureTestingModule({providers: [LoggerService]}));

  it('should be created', () => {
    const service: StateService = TestBed.get(StateService);
    expect(service).toBeTruthy();
  });
  it('getState shoud return deep clone of the state if no key specified', () => {
    const service: StateService = TestBed.get(StateService);
    const expected = {
      ...initialState,
      myKey: 'myValue'
    };
    service.setState('myKey', 'myValue');
    const stateClone = service.getState();
    expect(stateClone).toEqual(expected);
    stateClone.myKey = 'new Value';
    expect(service.getState()).toEqual(expected);

  });
  it('getState shoud return deep clone from the state sub object if  key is specified', () => {
    const service: StateService = TestBed.get(StateService);
    const expectedState = {
      ...initialState,
      myKey: {
        myKey2: 'myValue'
      }
    };

    const expectedSubState = {

        myKey2: 'myValue'

    };

    service.setState('myKey', expectedSubState );
    const subStateClone = service.getState('myKey');
    expect(subStateClone).toEqual(expectedSubState);
    subStateClone.myKey2 = 'new Value';
    expect(service.getState('myKey')).toEqual(expectedSubState);

  });

  it('onStateChange should get the whole state when any key changed', (done) => {
    const service: StateService = TestBed.get(StateService);


    let changeIndex = 0;
    service.onStateChange().subscribe(value => {
      changeIndex ++;
      if (changeIndex === 1) {
        expect(value).toEqual({...initialState, myKey1 : 'value1'});

      } else  if (changeIndex === 2) {
        expect(value).toEqual({...initialState, myKey1 : 'value1', myKey2: 'value2'});
        done();

      }
    });
    service.setState('myKey1', 'value1');
    service.setState('myKey2', 'value2');

  });

  it('onStateChange should listen only to key changes if key is set', (done) => {
    const service: StateService = TestBed.get(StateService);


    let changeIndex = 0;
    service.onStateChange('myKey1').subscribe(value => {
      changeIndex ++;
      expect(value).toEqual( 'value1');

    });
    setTimeout(() => {
      expect(changeIndex).toEqual(1);
      done();
    }, 1000);
    service.setState('myKey1', 'value1');
    service.setState('myKey2', 'value2');

  });
});
