import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaygroundPageRoutingModule } from './playground-routing.module';

import { PlaygroundPage } from './playground.page';

import {TestComponentModule} from '../..//components/test/test.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaygroundPageRoutingModule,
    TestComponentModule,
  ],
  declarations: [PlaygroundPage]
})
export class PlaygroundPageModule {}
