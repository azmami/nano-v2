import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {
    private google: any;
    private map: any;
    private markers: any[] = [];
    private polyline: any;

    // very very bad
    initializeService(google: any) {
        this.google = google;
        this.map = new google.maps.Map(document.getElementById('map'),
        {
            center: { lat: 35.6894875, lng: 139.69 },
            zoom: 10
        });
    }
    
    // fix this later
    updateMarkers(locations: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            locations.forEach((location, index) => {
                this.markers.push(new this.google.maps.Marker({
                    position: { lat: location.lat, lng: location.long },
                    map: this.map
                }));
                if(index == locations.length - 1) {
                    resolve(location);
                }
            });
        });
    }

    // fix this later
    updateTrackingPath(locations: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            let path = [];
            locations.forEach((location, index) => {
                path.push({ lat: location.lat, lng: location.long });
                if(index == locations.length - 1) {
                    if(this.polyline) this.polyline.setMap(null);
                    this.polyline = new this.google.maps.Polyline({
                        path: path,
                        geodesic: true,
                        strokeColor: '#ff0000',
                        map: this.map
                    });
                }
            });
        });
    }
}