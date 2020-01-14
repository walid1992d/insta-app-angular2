import { Component, OnInit } from '@angular/core';
import {PlatformService} from '../../services/platform.service';
/**
 * Generated class for the PlaygroundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-playground',
  templateUrl: 'playground.page.html',
  styleUrls: ['./playground.page.scss'],

})
export class PlaygroundPage implements OnInit {
   platformCheckData = [];
  constructor(public platformService: PlatformService) {
  }

  ngOnInit() {
   this.getPlatformCheckData();
  }

  getPlatformCheckData() {
    const checks = [
      'isBrowser',
      'isDesktopBrowser',
      'isMobileBrowser',
      'isIOSBrowser',
      'isAndroidBrowser',
      'isMobileDevice',
      'isIOSDevice',
      'isAndroidDevice',
      'isDesktopDevice',
      'isWindowsDevice',
      'isOSXDevice',
      'isLinuxDevice',

    ];
    this.platformCheckData = checks.map(aspect => ({
     name: aspect,
     fullfilled: this.platformService[aspect],
   }));
  }

}
