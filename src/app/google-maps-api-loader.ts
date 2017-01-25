const url = 'https://maps.googleapis.com/maps/api/js?callback=__MapsAPILoaded';

export class GoogleMapsAPILoader {
   private loadAPIPromise: Promise<any>;
   constructor(private apiKey: string, private version: string, private language?: string, private region?: string) {
      this.loadAPIPromise = new Promise(resolve => {
         window['__MapsAPILoaded'] = () => {
            resolve(window['google']);
         };
         this.loadScript();
      });
   }

   public loadAPI() {
      return this.loadAPIPromise.then(google => {
         return google;
      });
   }

   private loadScript() {
      let node = document.createElement('script');
      node.src = url + `&libraries=places&key=${this.apiKey}&v=${this.version}`;
      if (this.language) node.src += `&language=${this.language}`;
      if (this.region) node.src += `&region=${this.region}`;
      node.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(node);
   }
}