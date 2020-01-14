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

  public get isWindowsDevice() {
    return this.isDesktopDevice && this.OS === 'Windows';
  }

  public get isOSXDevice() {
    return this.isDesktopDevice && this.OS === 'OSX';
  }

  public get isLinuxDevice() {
    return this.isDesktopDevice && this.OS === 'Linux';
  }



  private get OS(): string {
    let OSName = 'Unknown';
    if (window.navigator.userAgent.indexOf('Windows NT 10.0') !== -1) { OSName = 'Windows'; }
    if (window.navigator.userAgent.indexOf('Windows NT 6.2') !== -1) { OSName = 'Windows'; }
    if (window.navigator.userAgent.indexOf('Windows NT 6.1') !== -1) { OSName = 'Windows'; }
    if (window.navigator.userAgent.indexOf('Windows NT 6.0') !== -1) { OSName = 'Windows'; }
    if (window.navigator.userAgent.indexOf('Windows NT 5.1') !== -1) { OSName = 'Windows'; }
    if (window.navigator.userAgent.indexOf('Windows NT 5.0') !== -1) { OSName = 'Windows'; }
    if (window.navigator.userAgent.indexOf('Mac')            !== -1) { OSName = 'OSX'; }
    if (window.navigator.userAgent.indexOf('Linux')          !== -1) { OSName = 'Linux'; }
    return OSName;
  }
}
