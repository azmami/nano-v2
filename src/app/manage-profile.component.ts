import { Component, Input } from '@angular/core';
import { MenuComponent } from './menu.component';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
@Component({
    templateUrl: './manage-profile.component.html',
    styles: [`
        h3, input {
            color: #ffffff;
        }
    `]
})
export class ManageProfileComponent implements MenuComponent {
    @Input() data: any;
    private userId: string;
    private userName: string;
    private userIdObservable: FirebaseObjectObservable<any>;
    private userNameObservable: FirebaseObjectObservable<any>;
    private userIdSubscription: any;
    private userNameSubscription: any;
    
    constructor(private angularFire: AngularFire) {
        this.angularFire.auth.subscribe(update => {
            if(update) {
                this.userIdObservable = this.angularFire.database.object(`/users/${update.uid}/user_id`,
                { preserveSnapshot: true });
                this.userIdSubscription = this.userIdObservable.subscribe(update => {
                    this.userId = update.val();
                });
                this.userNameObservable = this.angularFire.database.object(`/users/${update.uid}/display_name`,
                { preserveSnapshot: true });
                this.userNameSubscription = this.userNameObservable.subscribe(update => {
                    this.userName = update.val();
                });
            } else {
                if(this.userIdSubscription) {
                    this.userIdSubscription.unsubscribe();
                }
                if(this.userNameSubscription) {
                    this.userNameSubscription.unsubscrube();
                }
            }
        });
    }

    private saveUserProfile() {
        this.userIdObservable.set(this.userId).then(resolve => {
            let userId = this.angularFire.database.object(`/user_ids/${this.userId}`, { preserveSnapshot: true });
            let data = {
                uid: this.angularFire.auth.getAuth().uid,
                addedAt: new Date().getTime()
            }
            userId.set(data);
        }).catch(reject => {
            // some error.
            console.log(reject);
        });
        this.userNameObservable.set(this.userName);
    }
}