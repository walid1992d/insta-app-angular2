import { Injectable } from '@angular/core';
import {Platform } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class PlatformService {


  constructor(public platform: Platform) {
  }
  public get isBrowser() {

    return this.isDesktopBrowser || this.isMobileBrowser;
  }
  public get isDesktopBrowser() {

    return this.platform.is('desktop') && !this.isDesktopDevice;
  }
  public get isMobileBrowser() {

    return this.platform.is('mobileweb');
  }
  public get isIOSBrowser() {

    return this.platform.is('ios') && this.isMobileBrowser;
  }
  public get isAndroidBrowser() {

    return this.platform.is('android') && this.isMobileBrowser;
  }

  public get isMobileDevice() {

    return this.platform.is('mobile') && !this.isMobileBrowser;
  }
  public get isIOSDevice() {

    return this.platform.is('ios') && this.isMobileDevice;
  }
  public get isAndroidDevice() {

    return this.platform.is('android') && this.isMobileDevice;
  }
  public get isDesktopDevice() {
    return this.platform.is('electron');
  }
}
