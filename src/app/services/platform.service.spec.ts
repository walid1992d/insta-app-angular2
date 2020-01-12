import { TestBed } from '@angular/core/testing';

import { PlatformService } from './platform.service';

import {Platform } from '@ionic/angular';


describe('PlatformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatformService = TestBed.get(PlatformService);
    expect(service).toBeTruthy();
  });

  describe('Platforms', () => {
    it('Browser should return right booleans' , () => {
      const service: PlatformService = TestBed.get(PlatformService);
      const platform: Platform = TestBed.get(Platform);
      platform.is = (name: any) => {
        if (name === 'desktop' || name === 'mobileweb') {
        return true;
        }
        return false;
      };
      service.platform = platform;
      expect(service.isAndroidBrowser).toBe(false);
      expect(service.isAndroidDevice).toBe(false);
      expect(service.isBrowser).toBe(true);
      expect(service.isDesktopBrowser).toBe(true);
      expect(service.isDesktopDevice).toBe(false);
      expect(service.isIOSBrowser).toBe(false);
      expect(service.isIOSDevice).toBe(false);
      expect(service.isMobileBrowser).toBe(true);
      expect(service.isMobileDevice).toBe(false);


    });
    it('Desktop Browser should return right booleans' , () => {
      const service: PlatformService = TestBed.get(PlatformService);
      const platform: Platform = TestBed.get(Platform);
      platform.is = (name: any) => {
        if (name === 'desktop') {
        return true;
        }
        return false;
      };
      service.platform = platform;
      expect(service.isAndroidBrowser).toBe(false);
      expect(service.isAndroidDevice).toBe(false);
      expect(service.isBrowser).toBe(true);
      expect(service.isDesktopBrowser).toBe(true);
      expect(service.isDesktopDevice).toBe(false);
      expect(service.isIOSBrowser).toBe(false);
      expect(service.isIOSDevice).toBe(false);
      expect(service.isMobileBrowser).toBe(false);
      expect(service.isMobileDevice).toBe(false);


    });
    it('Mobile Browser should return right booleans' , () => {
      const service: PlatformService = TestBed.get(PlatformService);
      const platform: Platform = TestBed.get(Platform);
      platform.is = (name: any) => {
        if (name === 'mobileweb') {
        return true;
        }
        return false;
      };
      service.platform = platform;
      expect(service.isAndroidBrowser).toBe(false);
      expect(service.isAndroidDevice).toBe(false);
      expect(service.isBrowser).toBe(true);
      expect(service.isDesktopBrowser).toBe(false);
      expect(service.isDesktopDevice).toBe(false);
      expect(service.isIOSBrowser).toBe(false);
      expect(service.isIOSDevice).toBe(false);
      expect(service.isMobileBrowser).toBe(true);
      expect(service.isMobileDevice).toBe(false);


    });
    it('IOS Browser should return right booleans' , () => {
      const service: PlatformService = TestBed.get(PlatformService);
      const platform: Platform = TestBed.get(Platform);
      platform.is = (name: any) => {
        if (name === 'mobileweb' || name === 'ios') {
        return true;
        }
        return false;
      };
      service.platform = platform;
      expect(service.isAndroidBrowser).toBe(false);
      expect(service.isAndroidDevice).toBe(false);
      expect(service.isBrowser).toBe(true);
      expect(service.isDesktopBrowser).toBe(false);
      expect(service.isDesktopDevice).toBe(false);
      expect(service.isIOSBrowser).toBe(true);
      expect(service.isIOSDevice).toBe(false);
      expect(service.isMobileBrowser).toBe(true);
      expect(service.isMobileDevice).toBe(false);


    });
    it('Android Browser should return right booleans' , () => {
      const service: PlatformService = TestBed.get(PlatformService);
      const platform: Platform = TestBed.get(Platform);
      platform.is = (name: any) => {
        if (name === 'mobileweb' || name === 'android') {
        return true;
        }
        return false;
      };
      service.platform = platform;
      expect(service.isAndroidBrowser).toBe(true);
      expect(service.isAndroidDevice).toBe(false);
      expect(service.isBrowser).toBe(true);
      expect(service.isDesktopBrowser).toBe(false);
      expect(service.isDesktopDevice).toBe(false);
      expect(service.isIOSBrowser).toBe(false);
      expect(service.isIOSDevice).toBe(false);
      expect(service.isMobileBrowser).toBe(true);
      expect(service.isMobileDevice).toBe(false);


    });

    it('Mobile Device should return right booleans' , () => {
      const service: PlatformService = TestBed.get(PlatformService);
      const platform: Platform = TestBed.get(Platform);
      platform.is = (name: any) => {
        if (name === 'mobile'  ) {
        return true;
        }
        return false;
      };
      service.platform = platform;
      expect(service.isAndroidBrowser).toBe(false);
      expect(service.isAndroidDevice).toBe(false);
      expect(service.isBrowser).toBe(false);
      expect(service.isDesktopBrowser).toBe(false);
      expect(service.isDesktopDevice).toBe(false);
      expect(service.isIOSBrowser).toBe(false);
      expect(service.isIOSDevice).toBe(false);
      expect(service.isMobileBrowser).toBe(false);
      expect(service.isMobileDevice).toBe(true);


    });

    it('IOS Device should return right booleans' , () => {
      const service: PlatformService = TestBed.get(PlatformService);
      const platform: Platform = TestBed.get(Platform);
      platform.is = (name: any) => {
        if (name === 'ios'  || name === 'mobile' ) {
        return true;
        }
        return false;
      };
      service.platform = platform;
      expect(service.isAndroidBrowser).toBe(false);
      expect(service.isAndroidDevice).toBe(false);
      expect(service.isBrowser).toBe(false);
      expect(service.isDesktopBrowser).toBe(false);
      expect(service.isDesktopDevice).toBe(false);
      expect(service.isIOSBrowser).toBe(false);
      expect(service.isIOSDevice).toBe(true);
      expect(service.isMobileBrowser).toBe(false);
      expect(service.isMobileDevice).toBe(true);


    });
    it('IOS Device should return right booleans' , () => {
      const service: PlatformService = TestBed.get(PlatformService);
      const platform: Platform = TestBed.get(Platform);
      platform.is = (name: any) => {
        if (name === 'android'  || name === 'mobile' ) {
        return true;
        }
        return false;
      };
      service.platform = platform;
      expect(service.isAndroidBrowser).toBe(false);
      expect(service.isAndroidDevice).toBe(true);
      expect(service.isBrowser).toBe(false);
      expect(service.isDesktopBrowser).toBe(false);
      expect(service.isDesktopDevice).toBe(false);
      expect(service.isIOSBrowser).toBe(false);
      expect(service.isIOSDevice).toBe(false);
      expect(service.isMobileBrowser).toBe(false);
      expect(service.isMobileDevice).toBe(true);


    });
    it('Desktop Device should return right booleans' , () => {
      const service: PlatformService = TestBed.get(PlatformService);
      const platform: Platform = TestBed.get(Platform);
      platform.is = (name: any) => {
        if (name === 'electron') {
        return true;
        }
        return false;
      };
      service.platform = platform;
      expect(service.isAndroidBrowser).toBe(false);
      expect(service.isAndroidDevice).toBe(false);
      expect(service.isBrowser).toBe(false);
      expect(service.isDesktopBrowser).toBe(false);
      expect(service.isDesktopDevice).toBe(true);
      expect(service.isIOSBrowser).toBe(false);
      expect(service.isIOSDevice).toBe(false);
      expect(service.isMobileBrowser).toBe(false);
      expect(service.isMobileDevice).toBe(false);


    });


  });
});
