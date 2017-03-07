import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    selector: 'navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
    private userSubscription: any;
    @Output() onManageAssetsMenuClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() onRegisterAssetMenuClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() onManageProfileMenuClicked: EventEmitter<any> = new EventEmitter<any>();
    @Output() onLoggedOut: EventEmitter<any> = new EventEmitter<any>();
    constructor(private angularFire: AngularFire) {
    }

    showManageAssetsMenu() {
        this.onManageAssetsMenuClicked.emit({ yay: true });
    }
    showAssetRegistrationMenu() {
        this.onRegisterAssetMenuClicked.emit({ yo: true });
    }
    showManageProfileMenu() {
        this.onManageProfileMenuClicked.emit({ yo: true });
    }

    login() {
        this.angularFire.auth.login().then((result) => {
           let user = this.angularFire.database.object(`/users/${result.uid}`, { preserveSnapshot: true });
           this.userSubscription = user.subscribe(snapshot => {
               if(snapshot.exists()) {
                    // user already registered, update only display name
                    
               } else {
                    user.update({
                        user_id: result.uid,
                        display_name: result.auth.displayName
                    }).then(done => {
                        /*
                        let newUserName = this.angularFire.database.object(`/usernames/${result.uid}`, { preserveSnapshot: true });
                            newUserName.update({
                            uid: result.uid
                        });
                        */
                    });
               }
           })
        });
    }
    logout() {
        if (typeof this.userSubscription !== 'undefined') {
            this.userSubscription.unsubscribe();
        }
        this.angularFire.auth.logout();
        this.onLoggedOut.emit({logout: true});
    }
}