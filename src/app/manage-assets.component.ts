import { Component, Input } from '@angular/core';
import { MenuComponent } from './menu.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    templateUrl: './manage-assets.component.html',
    styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements MenuComponent {
    @Input() data: any;
    private assets: FirebaseListObservable<any[]>;
    private assetsSubscription: any;
    constructor(private angularFire: AngularFire) {
        this.angularFire.auth.subscribe(update => {
            if(update) {
                this.assets = this.angularFire.database.list(`/users/${update.uid}/assets`);
            } else {
                if(this.assetsSubscription) {
                    this.assetsSubscription.unsubscribe();
                }
            }
        })
    }
    
}