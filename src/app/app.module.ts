import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar.component';
import { MapComponent } from './map.component';
import { MenuContainerComponent } from './menu-container.component';
import { AssetRegistrationRequestComponent } from './asset-registration-request.component';
import { ManageAssetsComponent } from './manage-assets.component';
import { LoginFirstComponent } from './login-first.component';
import { ManageProfileComponent } from './manage-profile.component';

import { MenuDirective } from './menu.directive';
import { MenuService } from './menu.service';

export const firebaseConfig = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  databaseURL: environment.firebase.databaseURL,
  storageBucket: environment.firebase.storageBucket
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MapComponent,
    MenuContainerComponent,
    AssetRegistrationRequestComponent,
    ManageAssetsComponent,
    LoginFirstComponent,
    ManageProfileComponent,
    MenuDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  entryComponents: [
    LoginFirstComponent,
    ManageAssetsComponent,
    AssetRegistrationRequestComponent,
    ManageProfileComponent
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
