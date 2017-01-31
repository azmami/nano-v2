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
    
  }

}
