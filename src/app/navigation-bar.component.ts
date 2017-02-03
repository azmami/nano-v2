import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
    selector: 'navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
    constructor(private angularFire: AngularFire) {
    }
    login() {
        this.angularFire.auth.login();
    }
    logout() {
        this.angularFire.auth.logout();
    }
}