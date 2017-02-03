import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'main-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    private title: string;
    private assets: FirebaseListObservable<any[]>;
    
    private assetsSubscription: any;
    
    constructor(private angularFire: AngularFire) {
        this.angularFire.auth.subscribe(update => {
            console.log(update);
            if(update) {     
                this.assets = this.angularFire.database.list(`/assets/${update.uid}`);
            } else {
                if(this.assetsSubscription) {
                    
                }
            }
        });
    }
}