  // tslint:disable:no-console

import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;
  let logSpy;
  let warnSpy;
  let errorSpy;
  beforeEach(() => {

    TestBed.configureTestingModule({});
    service = TestBed.get(LoggerService);
    logSpy = spyOn(console, 'log');
    warnSpy = spyOn(console, 'warn');
    errorSpy = spyOn(console, 'error');

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('loggerFunctions', () => {
    it('log() should call console.log', () => {
      service.log('1', 2);
      expect(logSpy).toHaveBeenCalledWith('1', 2);
    });
    it('warn() should call console.warn', () => {
      service.warn('1', 2);
      expect(warnSpy).toHaveBeenCalledWith('1', 2);

    });
    it('error() should call console.error', () => {
      service.error('1', 2);
      expect(errorSpy).toHaveBeenCalledWith('1', 2);
    });
  });
});
