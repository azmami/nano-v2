import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { GoogleMapsAPILoader } from './google-maps-api-loader';
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
    constructor(private angularFire: AngularFire) {
        this.apiLoader = new GoogleMapsAPILoader(environment.googleMapsAPI.apiKey, environment.googleMapsAPI.apiVer);
        this.apiLoader.loadAPI().then((google) => {
            let map = new google.maps.Map(document.getElementById('map'),
            {
                center: { lat: 35.6894875, lng: 139.69 },
                zoom: 10
            });
            this.angularFire.auth.subscribe(update => {
                if(update) {
                    this.angularFire.database.list(`/locations/${update.uid}`).subscribe(locations => {
                        console.log(locations);
                        locations.forEach((val, index) => {
                            let location = { lat: val.lat, lng: val.long };
                            let marker = new google.maps.Marker({
                                position: location,
                                map: map
                            });
                        });
                    });
                }
            });
            
        });
    }
}