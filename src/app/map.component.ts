import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { GoogleMapsAPILoader } from './google-maps-api-loader';
import { LocationService } from './location.service';
import { environment } from '../environments/environment';

@Component({
    selector: 'google-map',
    template: `<div id="map"></div>`,
    styles: [`
    #map {
        margin: 0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }`]
})
export class MapComponent {
    private isLoadingMapNow: boolean = true;
    private apiLoader: GoogleMapsAPILoader;
    private subscription: any; 

    constructor(private angularFire: AngularFire, private locationService: LocationService) {
        this.apiLoader = new GoogleMapsAPILoader(environment.googleMapsAPI.apiKey, environment.googleMapsAPI.apiVer);
        this.apiLoader.loadAPI().then((google) => {
            this.locationService.initializeService(google);

            this.angularFire.auth.subscribe(auth => {
                if(auth) {
                    this.subscription = this.angularFire.database.list(`/locations/${auth.uid}`, {
                        query: {
                            orderByChild: 'addedAt',
                            limitToLast: 10
                        }
                    }).subscribe(updatedLocations => {
                        this.locationService.updateMarkers(updatedLocations);
                        this.locationService.updateTrackingPath(updatedLocations);
                    });
                } else {
                    if(this.subscription) {
                        this.subscription.unsubscribe();
                    }
                }
            });
        });
    }
}