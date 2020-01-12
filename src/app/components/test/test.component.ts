import { Component } from '@angular/core';
import {environment} from '../../../environments/environment';
/**
 * Generated class for the TestcomponentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'testcomponent',
  templateUrl: 'test.component.html'
})
export class TestComponent {

  text: string;
  envCode = environment.envCode;
  constructor() {
    console.log('Hello TestcomponentComponent Component ' + this.envCode );
    this.text = 'Hello World ' + this.envCode;
  }

}
