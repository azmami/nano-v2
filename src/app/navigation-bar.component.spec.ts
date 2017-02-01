import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavigationBarComponent } from './navigation-bar.component';
import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

let menuComponent: NavigationBarComponent;
let fixture: ComponentFixture<NavigationBarComponent>;
let de: DebugElement;
let el: HTMLElement;
let angularFire: AngularFire;
let componentAngularFire: AngularFire;
let angularFireStub: any = {
  auth: {
    subscribe: (auth) => {
      return {
        unsubscribe: () => {
          // do nothing
        }
      };
    },
    unsubscribe: () => {
      return 'unsubscribe';
    },
    login: () => {
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

  // this fails..
  it('should display the name of the logged user at the right top corder', () => {
    let compiled = fixture.debugElement.query(By.css(".display-name"));
    console.log(angularFireStub);
    fixture.detectChanges();
    console.log(angularFireStub.auth === true);
    compiled = fixture.debugElement.query(By.css(".display-name"));
    expect(compiled.nativeElement.textContent).toBe('Meme-chan');
  });

  it('should render the app title and button at menu bar', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('md-toolbar').querySelector('span').textContent).toContain('NANO');
    expect(compiled.querySelector('md-toolbar').querySelector('button').textContent).toContain('Login');
  });

});
