import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'menu',
    template: `
        <md-toolbar>
            <span>NANO</span>
            <span class="fill-remaining-space"></span>    
            <span class="display-name">{{(angularFire.auth | async)?.google.displayName}}</span>
            <button *ngIf="!(angularFire.auth | async)" color="primary" md-raised-button (click)="login()">Login</button>
            <button *ngIf="angularFire.auth | async" color="primary" md-raised-button (click)="logout()">Logout</button>
        </md-toolbar>
    `,
    styles: [`
        .display-name {
            margin: 0.3em 0.5em 0.3em 0.3em;
            padding: 0.3em;
            font-size: 0.6em;
        }
    `,`.fill-remaining-space {
            flex: 1 1 auto;
        }
    `]
})
export class MenuComponent {
    constructor(private angularFire: AngularFire) {
        this.angularFire.auth.subscribe(auth => {
            if(auth) {
                console.log(auth);
            } else {
                console.log('not logged in');
            }
        });
    }
    login() {
        this.angularFire.auth.login();
    }
    logout() {
        this.angularFire.auth.logout();
    }
}