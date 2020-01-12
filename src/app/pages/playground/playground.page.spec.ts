import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from '../../app-routing.module';

import { PlaygroundPage } from './playground.page';
import {TestComponentModule} from '../../components/test/test.module';

describe('PlaygroundPage', () => {
  let component: PlaygroundPage;
  let fixture: ComponentFixture<PlaygroundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundPage ],
      imports: [IonicModule.forRoot(), TestComponentModule, AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PlaygroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
