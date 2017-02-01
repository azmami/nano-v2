import { Component } from '@angular/core';
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
    constructor() {
        this.apiLoader = new GoogleMapsAPILoader(environment.googleMapsAPI.apiKey, environment.googleMapsAPI.apiVer);
        this.apiLoader.loadAPI().then((google) => {
            let map = new google.maps.Map(document.getElementById('map'),
            {
                center: { lat: 35.6894875, lng: 139.69 },
                zoom: 10
            })
        });
    }
}