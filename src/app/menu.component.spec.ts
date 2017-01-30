import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenuComponent } from './menu.component';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

let menuComponent: MenuComponent;
let fixture: ComponentFixture<MenuComponent>;
let de: DebugElement;
let el: HTMLElement;
let angularFire: AngularFire;
let componentAngularFire: AngularFire;
let angularFireStub: any = {
  auth: {
    subscribe: () => {
      return 'subscribe';
    },
    unsubscribe: () => {
      return 'unsubscribe';
    },
    login: () => {
      console.log("logingin....");
      login();
    }
  }
};

let login = () => {
  angularFireStub.auth.google = {
    displayName: 'Meme-chan'
  };
};

describe('Menu Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent
      ],
      imports: [
        MaterialModule.forRoot()
      ],
      providers: [
        { provide: AngularFire, useValue: angularFireStub }
      ]
    });

    fixture = TestBed.createComponent(MenuComponent);
    menuComponent = fixture.componentInstance;

    angularFire = fixture.debugElement.injector.get(AngularFire);
    componentAngularFire = angularFire;

    angularFire = TestBed.get(AngularFire);
    
  });

  it('should render the app title and button at menu bar', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').querySelector('span').textContent).toContain('NANO');
    expect(compiled.querySelector('md-toolbar').querySelector('button').textContent).toContain('Login');
  });

  // TODO: fix this later: TypeError: subscription.unsubscribe is not a function 
  it('should display the name of the logged user at the right top corder', () => {
    menuComponent.login();
    fixture.detectChanges(); 
  });

});
