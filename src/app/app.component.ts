import { Component } from '@angular/core';
import { GoogleMapsAPILoader } from './google-maps-api-loader';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiLoader: any;
  constructor() {
    this.apiLoader = new GoogleMapsAPILoader(environment.apiKey, environment.apiVer);
    this.apiLoader.loadAPI().then((google) => {
      let map = new google.maps.Map(document.getElementById('map'),
      {
        center: { lat: 35.6894875, lng: 139.69 },
        zoom: 10
      })
    });

  }
}
