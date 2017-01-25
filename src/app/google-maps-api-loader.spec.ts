import { TestBed, async } from '@angular/core/testing';
import { GoogleMapsAPILoader } from './google-maps-api-loader';
import { environment } from '../environments/environment';

describe('Google Maps API Loader Test', () => {
    it('should load Google Maps API v3.26', done => {
        let loader = new GoogleMapsAPILoader(environment.apiKey, '3.26');
        loader.loadAPI().then((google) => {
            expect(google.maps.version).toBe('3.26.17');
            expect(google.maps.TravelMode.WALKING).toBe('WALKING');
            done();
        });
    });
});