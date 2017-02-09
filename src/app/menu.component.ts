export interface MenuComponent {
    data: any;
}
/*
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { AssetRegistrationRequestComponent } from './asset-registration-request.component';
import { ManageAssetsComponent } from './manage-assets.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'dynamic-content',
    template: '<div #dynamicContent></div>',
    entryComponents: [AssetRegistrationRequestComponent, ManageAssetsComponent]
})
export class MenuComponent {
    private title: string;
    private assets: FirebaseListObservable<any[]>;
    @ViewChild('dynamicContent', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
    
    private assetsSubscription: any;
    
    constructor(private angularFire: AngularFire, private resolver: ComponentFactoryResolver) {
        
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
*/